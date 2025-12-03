'use client';

import { motion } from 'framer-motion';
import { Pizza } from '@/data/menu';
import styles from './PizzaCard.module.scss';

interface PizzaCardProps {
  pizza: Pizza;
  index: number;
}

export default function PizzaCard({ pizza, index }: PizzaCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className={styles.card}
    >
      <div className={styles.header}>
        <h3 className={styles.name}>{pizza.name}</h3>
        <div className={styles.pizzaIcon}>🍕</div>
      </div>

      <p className={styles.ingredients}>
        {pizza.ingredients.join(', ')}
      </p>

      <div className={styles.prices}>
        <div className={styles.priceItem}>
          <span className={styles.size}>Junior</span>
          <span className={styles.sizeDesc}>(1 pers)</span>
          <span className={styles.price}>{pizza.prices.junior.toFixed(2)}€</span>
        </div>
        <div className={styles.priceItem}>
          <span className={styles.size}>Senior</span>
          <span className={styles.sizeDesc}>(2 pers)</span>
          <span className={styles.price}>{pizza.prices.senior.toFixed(2)}€</span>
        </div>
        <div className={styles.priceItem}>
          <span className={styles.size}>Mega</span>
          <span className={styles.sizeDesc}>(4 pers)</span>
          <span className={styles.price}>{pizza.prices.mega.toFixed(2)}€</span>
        </div>
      </div>
    </motion.div>
  );
}
