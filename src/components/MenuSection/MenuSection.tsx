'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import styles from './MenuSection.module.scss';

interface MenuSectionProps {
  id: string;
  title: string;
  subtitle?: string;
  icon?: string;
  children: ReactNode;
  variant?: 'default' | 'cream' | 'white';
}

export default function MenuSection({
  id,
  title,
  subtitle,
  icon,
  children,
  variant = 'default'
}: MenuSectionProps) {
  return (
    <section id={id} className={`${styles.section} ${styles[variant]}`}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <div className={styles.ribbon}>
            {icon && <span className={styles.icon}>{icon}</span>}
            <h2 className={styles.title}>{title}</h2>
          </div>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </motion.div>

        <div className={styles.content}>
          {children}
        </div>
      </div>
    </section>
  );
}
