'use client';

import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, Truck, CreditCard, Check } from 'lucide-react';
import { restaurant } from '@/data/menu';
import styles from './ContactSection.module.scss';

export default function ContactSection() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.header}
        >
          <h2>Contact & Infos</h2>
          <p>Commander ou nous rendre visite</p>
        </motion.div>

        <div className={styles.grid}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={styles.phonesCard}
          >
            <h3>Commander par téléphone</h3>
            <div className={styles.phoneButtons}>
              <a href={`tel:${restaurant.telephones[0].replace(/\s/g, '')}`} className={styles.phonePrimary}>
                <Phone size={24} />
                <span>{restaurant.telephones[0]}</span>
              </a>
              <a href={`tel:${restaurant.telephones[1].replace(/\s/g, '')}`} className={styles.phoneSecondary}>
                <Phone size={20} />
                <span>{restaurant.telephones[1]}</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={styles.infoCard}
          >
            <div className={styles.infoIcon}>
              <MapPin size={24} />
            </div>
            <div className={styles.infoContent}>
              <h4>Adresse</h4>
              <p>{restaurant.adresse}</p>
              <p>{restaurant.codePostal} {restaurant.ville}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className={styles.infoCard}
          >
            <div className={styles.infoIcon}>
              <Clock size={24} />
            </div>
            <div className={styles.infoContent}>
              <h4>Horaires</h4>
              <p>{restaurant.horaires.semaine}</p>
              <span className={styles.open}>Ouvert 7j/7</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className={styles.servicesCard}
          >
            <h4>Nos Services</h4>
            <ul className={styles.servicesList}>
              {restaurant.services.map((service, index) => (
                <li key={index}>
                  <Check size={16} />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className={styles.conditionsCard}
          >
            <h4>Infos Pratiques</h4>
            <div className={styles.conditionsList}>
              <div className={styles.condition}>
                <Truck size={18} />
                <span>Minimum livraison : <strong>{restaurant.conditions.minimumLivraison}</strong></span>
              </div>
              <div className={styles.condition}>
                <CreditCard size={18} />
                <span>{restaurant.conditions.cb}</span>
              </div>
              <div className={styles.condition}>
                <Check size={18} />
                <span>Tickets restaurant acceptés</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className={styles.mapWrapper}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2636.7!2d2.34!3d48.635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDM4JzA2LjAiTiAywrAyMCcyNC4wIkU!5e0!3m2!1sfr!2sfr!4v1699999999999"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localisation YouPizza"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
