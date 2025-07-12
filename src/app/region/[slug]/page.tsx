'use client';
import { use, useState } from 'react';
import { useFisheriesData } from '../../hooks/useFisheriesData';
import { AppLayout } from '../../components/AppLayout/AppLayout.component';
import { FisheryRegionCard } from '../../components/FisheryRegionCard/FisheryRegionCard.component';
import { FishCard } from '../../components/FishCard/FishCard.component';
import { Modal } from '../../components/Modal/Modal.component';
import './RegionPage.css';
import { Fishery } from '@/app/types';

export default function RegionPage ({ params }: { params: Promise<{ slug: string }> }) {
  const { slug: regionSlug } = use(params);
  const [selectedFish, setSelectedFish] = useState<Fishery | null>(null);
  const { data: fisheriesData, isLoading, error } = useFisheriesData();
  const regionData = fisheriesData?.find((region) => {
    return region.regionSlug === regionSlug;
  });

  if (isLoading) return (
    <AppLayout>
      <div className="page__loading">
        <p>Loading...</p>
      </div>
    </AppLayout>
  );

  if (error) return (
    <AppLayout>
      <div className="page__error">Error loading data</div>
    </AppLayout>
  );

  if (!regionData) return (
    <AppLayout>
      <div className="page__error">Region not found</div>
    </AppLayout>
  );

  console.log('selectedFish', selectedFish);

  return (
    <AppLayout>
      <div className="region-page__cont">
        <h1 className="page-header">Region: {regionData.regionName}</h1>
        <FisheryRegionCard
          isLink={false}
          noBorder={true}
          noHover={true}
          noPadding={true}
          regionSlug={regionData.regionSlug}
          regionName={regionData.regionName}
          averageMacros={regionData.averageMacros}
        />
        <div>
          <p className="region-page__p">Fish in this region:</p>
          <ul className="region-page__fish-list">
            {regionData.fisheries.map((fishery) => (
              <li key={fishery.ScientificName}>
                <FishCard fishery={fishery} onSelect={() => setSelectedFish(fishery)} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Modal isOpen={!!selectedFish} onClose={() => setSelectedFish(null)}>
        {selectedFish && <FishCard fishery={selectedFish} showFullInfo={true} />}
      </Modal>
    </AppLayout>
  );
}
