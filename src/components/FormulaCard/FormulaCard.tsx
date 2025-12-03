'use client';

import { motion } from 'framer-motion';
import { Menu } from '@/data/menu';
import styles from './FormulaCard.module.scss';

interface FormulaCardProps {
  menu: Menu;
  index: number;
}

export default function FormulaCard({ menu, index }: FormulaCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={styles.card}
    >
      <div className={styles.ribbon}>
        <span>{menu.name}</span>
      </div>

      <div className={styles.content}>
        <p className={styles.description}>{menu.content}</p>
      </div>

      <div className={styles.priceWrapper}>
        <span className={styles.price}>{menu.price.toFixed(2)}€</span>
      </div>
    </motion.div>
  );
}
