'use client';

import { ReactNode } from 'react';
import styles from './MenuGrid.module.scss';

interface MenuGridProps {
  children: ReactNode;
  columns?: 2 | 3 | 4;
}

export default function MenuGrid({ children, columns = 3 }: MenuGridProps) {
  return (
    <div className={`${styles.grid} ${styles[`columns${columns}`]}`}>
      {children}
    </div>
  );
}
