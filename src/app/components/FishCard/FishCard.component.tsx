import { FC } from 'react';
import { Fishery } from '../../types';
import Image from 'next/image';
import DOMPurify from 'dompurify';
import './FishCard.css';

interface FishCardProps {
  fishery: Fishery;
  onSelect?: () => void;
  showFullInfo?: boolean;
}

export const FishCard: FC<FishCardProps> = ({ fishery, onSelect, showFullInfo }) => {
  return <div className="fish-card__cont" onClick={onSelect ?? (() => void 0)}>
    <div className="fish-card__image-wrapper">
      <div className="fish-card__image">
        <Image
          src={fishery.SpeciesIllustrationPhoto.src}
          alt={fishery.SpeciesIllustrationPhoto.alt}
          fill
        />
      </div>
    </div>
    <div className="fish-card__info">
      <h3 className={
        `fish-card__info-title ${showFullInfo ? '' : 'two-line-clamp '}`
      }>{fishery.ScientificName}</h3>
      <div className="fish-card__info-macros">
        <p>Calories: {fishery.Calories}</p>
        <p>Fat: {fishery.FatTotal}</p>
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(fishery.PhysicalDescription || ''),
        }}
        className={`fish-card__info-description 
          ${showFullInfo ? '' : 'two-line-clamp '}
        `}
      />
    </div>
  </div>;
};
