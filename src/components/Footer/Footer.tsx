'use client';

import { ArrowUp, Phone } from 'lucide-react';
import { restaurant } from '@/data/menu';
import styles from './Footer.module.scss';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.brand}>
            <span className={styles.emoji}>🍕</span>
            <h3>{restaurant.nom}</h3>
            <p>{restaurant.slogan}</p>
          </div>

          <div className={styles.contact}>
            <a href={`tel:${restaurant.telephones[0].replace(/\s/g, '')}`} className={styles.phone}>
              <Phone size={18} />
              {restaurant.telephones[0]}
            </a>
            <p className={styles.address}>{restaurant.adresse}, {restaurant.codePostal} {restaurant.ville}</p>
          </div>

          <div className={styles.badges}>
            <span>🥖 Pâte fraîche maison</span>
            <span className={styles.halal}>✓ 100% Halal</span>
            <span>🛵 Livraison gratuite</span>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} {restaurant.nom}. Tous droits réservés.</p>
        </div>

        <button className={styles.backToTop} onClick={scrollToTop} aria-label="Retour en haut">
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
}
