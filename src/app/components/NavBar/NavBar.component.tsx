import { type FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FisheryRegion } from '../../types';
import { usePathname } from 'next/navigation';
import './NavBar.css';

interface NavBarProps {
  loading: boolean;
  data: FisheryRegion[];
}

export const NavBar: FC<NavBarProps> = ({ loading, data }) => {
  const pathname = usePathname();

  return (
    <nav className="navbar__cont">
      <Link href="/">
        <div className="navbar__logo">
          <Image src="/fish.svg" alt="Logo" width={40} height={40}  />
          <p className="navbar__logo-text">NOAA Fisheries</p>
        </div>
      </Link>
      <div className="navbar__regions">
        <small className="navbar__regions-title">Regions</small>

        {loading ? (
          // Skeleton loading state
          <div className="navbar__region--skeleton">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="animation--pulse navbar__region-text--skeleton"
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            ))}
          </div>
        ) : (
          // Actual data
          data.map(({ regionSlug, regionName }) => (
            <Link
              key={regionSlug}
              href={`/region/${regionSlug}`}
              className={`navbar__region-text ${pathname.endsWith(regionSlug) ? 'underline' : ''}`}
            >
              {regionName}
            </Link>
          ))
        )}
      </div>
    </nav>
  );
};
