'use client';

import { type FC, ReactNode } from 'react';
import { NavBar } from '../NavBar/NavBar.component';
import { useFisheriesData } from '../../hooks/useFisheriesData';
import './AppLayout.css';

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  const { data: fisheriesData, isLoading, error } = useFisheriesData();

  if (error) return <div>Error loading data</div>;

  return (
    <div className="app-layout__cont">
      <NavBar loading={isLoading} data={fisheriesData ?? []} />
      <div className="app-layout__main-cont">
        <main className="app-layout__main">
          {children}
        </main>
        <footer className="app-layout__footer">
          <p>Coded by <a href="https://github.com/redahas" className="app-layout__footer-link" target="_blank" rel="noopener noreferrer">@redahas</a> &rarr;</p>
        </footer>
      </div>
    </div>
  );
};
