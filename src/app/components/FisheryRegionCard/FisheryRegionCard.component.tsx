import { type FC } from 'react';
import Link from 'next/link';
import { AverageMacros } from '../../types';
import './FisheryRegionCard.css';

interface FisheryRegionCardProps {
  regionSlug: string;
  regionName: string;
  averageMacros: AverageMacros;
  isLink: boolean;
  noBorder?: boolean;
  noHover?: boolean;
  noPadding?: boolean;
}

const FisheryRegionCardLinkWrapper: FC<{
  children: React.ReactNode,
  regionSlug: string,
  isLink: boolean,
}> = ({ children, regionSlug, isLink }) => {
  return isLink ? <Link href={`/region/${regionSlug}`}>{children}</Link> : children;
};

export const FisheryRegionCard: FC<FisheryRegionCardProps> = ({
  regionSlug,
  regionName,
  averageMacros,
  isLink,
  noBorder,
  noHover,
  noPadding,
}) => {
  return <FisheryRegionCardLinkWrapper regionSlug={regionSlug} isLink={isLink}>
    <div className={`fishery-region-card__cont
      ${noBorder ? 'no-border' : ''} 
      ${noHover ? 'no-hover' : ''} 
      ${noPadding ? 'no-padding' : ''}
    `}>
      <h2>{regionName}</h2>
      <div>
        <p><small>Average Fat:</small> <strong>{averageMacros.fat} g</strong></p>
        <p><small>Average Calories:</small> <strong>{averageMacros.calories}</strong></p>
      </div>
    </div>
  </FisheryRegionCardLinkWrapper>;
};
