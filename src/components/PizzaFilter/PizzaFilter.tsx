'use client';

import { motion } from 'framer-motion';
import styles from './PizzaFilter.module.scss';

interface PizzaFilterProps {
  activeFilter: 'tomate' | 'creme' | 'all';
  onFilterChange: (filter: 'tomate' | 'creme' | 'all') => void;
}

export default function PizzaFilter({ activeFilter, onFilterChange }: PizzaFilterProps) {
  return (
    <div className={styles.filter}>
      <button
        className={`${styles.filterButton} ${activeFilter === 'all' ? styles.active : ''}`}
        onClick={() => onFilterChange('all')}
      >
        Toutes
      </button>
      <button
        className={`${styles.filterButton} ${activeFilter === 'tomate' ? styles.active : ''}`}
        onClick={() => onFilterChange('tomate')}
      >
        <span className={styles.icon}>🍅</span>
        Base Tomate
      </button>
      <button
        className={`${styles.filterButton} ${activeFilter === 'creme' ? styles.active : ''}`}
        onClick={() => onFilterChange('creme')}
      >
        <span className={styles.icon}>🥛</span>
        Base Crème
      </button>
    </div>
  );
}
