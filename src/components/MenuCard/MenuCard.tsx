'use client';

import { motion } from 'framer-motion';
import styles from './MenuCard.module.scss';

interface MenuCardProps {
  name: string;
  description?: string;
  price: number;
  pieces?: number;
  index: number;
  icon?: string;
}

export default function MenuCard({ name, description, price, pieces, index, icon = '🍴' }: MenuCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.03 }}
      className={styles.card}
    >
      <div className={styles.icon}>{icon}</div>
      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        {description && <p className={styles.description}>{description}</p>}
        {pieces && <span className={styles.pieces}>{pieces} pièces</span>}
      </div>
      <div className={styles.priceWrapper}>
        <span className={styles.price}>{price.toFixed(2)}€</span>
      </div>
    </motion.div>
  );
}
