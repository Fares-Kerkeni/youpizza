'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { restaurant } from '@/data/menu';
import styles from './Navbar.module.scss';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <button className={styles.logo} onClick={() => scrollToSection('hero')}>
          <span className={styles.logoIcon}>🍕</span>
          <div className={styles.logoText}>
            <span className={styles.logoName}>YouPizza</span>
            <span className={styles.logoSlogan}>Tout le monde l'adore</span>
          </div>
        </button>

        <div className={styles.centerInfo}>
          <div className={styles.badges}>
            <span className={styles.badge}>
              <MapPin size={12} />
              Ste-Geneviève-des-Bois
            </span>
            <span className={styles.badgeHalal}>Halal</span>
            <span className={styles.badgeDelivery}>Livraison gratuite</span>
          </div>
        </div>

        <div className={styles.actions}>
          <a href={`tel:${restaurant.telephones[0].replace(/\s/g, '')}`} className={styles.phoneButton}>
            <Phone size={18} />
            <div className={styles.phoneInfo}>
              <span className={styles.phoneLabel}>Commander</span>
              <span className={styles.phoneNumber}>{restaurant.telephones[0]}</span>
            </div>
          </a>

          <button
            className={`${styles.menuButton} ${isOpen ? styles.active : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileOverlay} ${isOpen ? styles.open : ''}`} onClick={() => setIsOpen(false)}></div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
        <div className={styles.mobileHeader}>
          <span className={styles.mobileTitle}>YouPizza</span>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <div className={styles.mobileContent}>
          <div className={styles.mobilePhones}>
            <a href={`tel:${restaurant.telephones[0].replace(/\s/g, '')}`} className={styles.mobilePhoneBtn}>
              <Phone size={24} />
              <span>{restaurant.telephones[0]}</span>
            </a>
            <a href={`tel:${restaurant.telephones[1].replace(/\s/g, '')}`} className={styles.mobilePhoneBtnAlt}>
              <Phone size={20} />
              <span>{restaurant.telephones[1]}</span>
            </a>
          </div>

          <div className={styles.mobileBadges}>
            <div className={styles.mobileBadge}>🍕 Pâte fraîche maison</div>
            <div className={styles.mobileBadge}>✓ 100% Halal</div>
            <div className={styles.mobileBadge}>🛵 Livraison gratuite</div>
          </div>

          <div className={styles.mobileNav}>
            <button onClick={() => scrollToSection('menu')}>Voir la carte</button>
            <button onClick={() => scrollToSection('offres')}>Nos offres</button>
            <button onClick={() => scrollToSection('contact')}>Contact</button>
          </div>

          <div className={styles.mobileHours}>
            <h4>Horaires</h4>
            <p>{restaurant.horaires.semaine}</p>
            <p className={styles.open7j}>Ouvert 7j/7</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
