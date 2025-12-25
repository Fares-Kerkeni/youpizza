'use client';

import { motion } from 'framer-motion';
import { Truck, ShoppingBag, Sparkles, Star } from 'lucide-react';
import { offres } from '@/data/menu';
import styles from './OfferBanner.module.scss';

export default function OfferBanner() {
  return (
    <section id="offres" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.header}
        >
          <Sparkles size={32} />
          <h2>Offres Exceptionnelles</h2>
          <Sparkles size={32} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={styles.subtitle}
        >
          Profitez de nos promotions exclusives !
        </motion.p>

        <div className={styles.offers}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, type: "spring" }}
            whileHover={{ scale: 1.05 }}
            className={styles.offerCard}
          >
            <div className={styles.badge}>
              <Star size={16} />
              <span>PROMO</span>
            </div>
            <div className={styles.offerIconWrapper}>
              <Truck size={36} />
            </div>
            <span className={styles.offerType}>{offres.livraison.titre}</span>
            <h3 className={styles.offerTitle}>{offres.livraison.offre}</h3>
            <p className={styles.offerConditions}>{offres.livraison.conditions}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            whileHover={{ scale: 1.05 }}
            className={`${styles.offerCard} ${styles.emporter}`}
          >
            <div className={`${styles.badge} ${styles.badgeGold}`}>
              <Star size={16} />
              <span>BEST</span>
            </div>
            <div className={styles.offerIconWrapper}>
              <ShoppingBag size={36} />
            </div>
            <span className={styles.offerType}>{offres.emporter.titre}</span>
            <h3 className={styles.offerTitle}>{offres.emporter.offre}</h3>
            <p className={styles.offerConditions}>{offres.emporter.conditions}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
