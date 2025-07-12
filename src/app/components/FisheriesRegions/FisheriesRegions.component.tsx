import { type FC } from 'react';
import { FisheryRegion } from '../../types';
import { FisheryRegionCard } from '../FisheryRegionCard/FisheryRegionCard.component';
import './FisheriesRegions.css';

interface FisheriesRegionsProps {
  data: FisheryRegion[];
}

export const FisheriesRegions: FC<FisheriesRegionsProps> = ({ data }) => {
  return (
    <article className="fisheries-regions__cont">
      <h1 className="page-header">NOAA Fisheries Regions</h1>
      <div className="fisheries-regions__regions">
        {data.map((region, index) => (
          <FisheryRegionCard
            isLink={true}
            noBorder={index === 0}
            key={region.regionSlug}
            regionSlug={region.regionSlug}
            regionName={region.regionName}
            averageMacros={region.averageMacros}
          />
        ))}
      </div>
    </article>
  );
};
