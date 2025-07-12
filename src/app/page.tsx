'use client';

import { FisheriesRegions } from './components/FisheriesRegions/FisheriesRegions.component';
import { useFisheriesData } from './hooks/useFisheriesData';
import { AppLayout } from './components/AppLayout/AppLayout.component';

export default function Home () {
  const { data: fisheriesData, isLoading, error } = useFisheriesData();

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

  if (!fisheriesData) return (
    <AppLayout>
      <div className="page__error">No data available</div>
    </AppLayout>
  );

  return (
    <AppLayout>
      <div className="home-page__cont">
        <FisheriesRegions data={fisheriesData} />
      </div>
    </AppLayout>
  );
}
