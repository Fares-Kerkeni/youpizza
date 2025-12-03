'use client';

import { motion } from 'framer-motion';
import { Truck, ShoppingBag, Sparkles } from 'lucide-react';
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
          <Sparkles size={28} />
          <h2>Offres Spéciales</h2>
        </motion.div>

        <div className={styles.offers}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={styles.offerCard}
          >
            <div className={styles.offerIconWrapper}>
              <Truck size={32} />
            </div>
            <span className={styles.offerType}>{offres.livraison.titre}</span>
            <h3 className={styles.offerTitle}>{offres.livraison.offre}</h3>
            <p className={styles.offerConditions}>{offres.livraison.conditions}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`${styles.offerCard} ${styles.emporter}`}
          >
            <div className={styles.offerIconWrapper}>
              <ShoppingBag size={32} />
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
