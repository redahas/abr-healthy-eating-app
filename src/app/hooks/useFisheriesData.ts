'use client';

import { useQuery } from '@tanstack/react-query';
import { Requester } from '../api/Requester';
import { AverageMacros, Fishery, FisheryRegion } from '../types';
import { regionToSlug } from '../utils/regionToSlug';

const FISHERIES_QUERY_KEY = ['fisheries'];

const calculateAverageMacros = (fisheries: Fishery[]): AverageMacros => {
  const totals = fisheries.reduce((acc, fishery) => ({
    fat: acc.fat + Number((fishery.FatTotal ?? '').replace(' g', '')),
    calories: acc.calories + Number(fishery.Calories),
  }), { fat: 0, calories: 0 });

  return {
    fat: (totals.fat / fisheries.length).toFixed(2),
    calories: Math.round(totals.calories / fisheries.length),
  };
};

export function useFisheriesData () {
  return useQuery({
    queryKey: FISHERIES_QUERY_KEY,
    queryFn: async (): Promise<Fishery[]> => {
      return Requester<Fishery[]>('/gofish', {
        method: 'GET',
      });
    },
    // Transform data before caching
    select: (data: Fishery[]) => {
      const groupedByRegion = data.reduce((acc, fishery) => {
        const regionSlug = regionToSlug(fishery.NOAAFisheriesRegion);
        if (!acc[regionSlug]) {
          acc[regionSlug] = [];
        }
        acc[regionSlug].push(fishery);
        return acc;
      }, {} as Record<string, Fishery[]>);

      return Object.entries(groupedByRegion).sort((a, b) => {
        const regionA = a[0];
        const regionB = b[0];
        return regionA.localeCompare(regionB);
      }).map(([regionSlug, fisheries]): FisheryRegion => ({
        regionSlug,
        regionName: fisheries[0].NOAAFisheriesRegion,
        fisheries,
        averageMacros: calculateAverageMacros(fisheries),
      }));
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });
}
