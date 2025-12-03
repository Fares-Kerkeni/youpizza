'use client';

import { motion } from 'framer-motion';
import { Phone, ChevronDown } from 'lucide-react';
import { restaurant } from '@/data/menu';
import styles from './Hero.module.scss';

export default function Hero() {
  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.background}>
        <div className={styles.pattern}></div>
        <div className={styles.gradient}></div>
      </div>

      <div className={styles.content}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className={styles.main}
        >
          <div className={styles.pizzaEmoji}>🍕</div>
          <h1 className={styles.title}>YouPizza</h1>
          <p className={styles.slogan}>{restaurant.slogan}</p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={styles.highlights}
          >
            <div className={styles.highlight}>
              <span className={styles.highlightIcon}>🥖</span>
              <span>Pâte fraîche maison</span>
            </div>
            <div className={styles.highlightHalal}>
              <span className={styles.highlightIcon}>✓</span>
              <span>100% Halal</span>
            </div>
            <div className={styles.highlight}>
              <span className={styles.highlightIcon}>🛵</span>
              <span>Livraison gratuite</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className={styles.actions}
        >
          <a href={`tel:${restaurant.telephones[0].replace(/\s/g, '')}`} className={styles.primaryBtn}>
            <Phone size={22} />
            <div className={styles.btnContent}>
              <span className={styles.btnLabel}>Commander maintenant</span>
              <span className={styles.btnPhone}>{restaurant.telephones[0]}</span>
            </div>
          </a>
          <button onClick={scrollToMenu} className={styles.secondaryBtn}>
            Voir la carte
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className={styles.scrollHint}
          onClick={scrollToMenu}
        >
          <span>Découvrir le menu</span>
          <ChevronDown size={24} className={styles.scrollIcon} />
        </motion.div>
      </div>
    </section>
  );
}
