'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './MenuTabs.module.scss';

// Import all menu data
import {
  pizzasTomate,
  pizzasCreme,
  sandwichs,
  tacosSizes,
  tacosViandes,
  tacosSupplements,
  bowlsSizes,
  burgers,
  menusBurgers,
  texMex,
  salades,
  saladesPrice,
  pates,
  patesPrice,
  lasagne,
  paninis,
  canettes33cl,
  bouteilles,
  desserts,
  glaces,
  menus,
  accompagnements
} from '@/data/menu';

const categories = [
  { id: 'pizzas', label: 'Pizzas', icon: '🍕', image: '/images/pizza.jpg' },
  { id: 'sandwichs', label: 'Sandwichs', icon: '🥪', image: '/images/sandwich.jpg' },
  { id: 'tacos', label: 'Tacos & Bowls', icon: '🌮', image: '/images/tacos.jpg' },
  { id: 'burgers', label: 'Burgers', icon: '🍔', image: '/images/burger.jpg' },
  { id: 'texmex', label: 'Tex Mex', icon: '🌶️', image: '/images/tacos.jpg' },
  { id: 'salades', label: 'Salades & Pâtes', icon: '🥗', image: '/images/pizza.jpg' },
  { id: 'paninis', label: 'Paninis', icon: '🥖', image: '/images/sandwich.jpg' },
  { id: 'boissons', label: 'Boissons', icon: '🥤', image: '/images/pizza.jpg' },
  { id: 'desserts', label: 'Desserts', icon: '🍰', image: '/images/pizza.jpg' },
  { id: 'menus', label: 'Menus', icon: '🎁', image: '/images/pizza.jpg' },
];

export default function MenuTabs() {
  const [activeTab, setActiveTab] = useState('pizzas');
  const [pizzaBase, setPizzaBase] = useState<'all' | 'tomate' | 'creme'>('all');
  const tabsRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to active tab on mobile
  useEffect(() => {
    if (tabsRef.current) {
      const activeButton = tabsRef.current.querySelector(`[data-tab="${activeTab}"]`);
      if (activeButton) {
        activeButton.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [activeTab]);

  const filteredPizzas = pizzaBase === 'all'
    ? [...pizzasTomate, ...pizzasCreme]
    : pizzaBase === 'tomate' ? pizzasTomate : pizzasCreme;

  const renderContent = () => {
    switch (activeTab) {
      case 'pizzas':
        return (
          <div className={styles.pizzasContent}>
            <div className={styles.pizzaFilters}>
              <button
                className={`${styles.filterBtn} ${pizzaBase === 'all' ? styles.active : ''}`}
                onClick={() => setPizzaBase('all')}
              >
                Toutes
              </button>
              <button
                className={`${styles.filterBtn} ${pizzaBase === 'tomate' ? styles.active : ''}`}
                onClick={() => setPizzaBase('tomate')}
              >
                Base Tomate
              </button>
              <button
                className={`${styles.filterBtn} ${pizzaBase === 'creme' ? styles.active : ''}`}
                onClick={() => setPizzaBase('creme')}
              >
                Base Crème
              </button>
            </div>
            <div className={styles.priceInfo}>
              <span>Junior (1 pers) • Senior (2 pers) • Mega (4 pers)</span>
            </div>
            <div className={styles.itemsGrid}>
              {filteredPizzas.map((pizza, index) => (
                <motion.div
                  key={pizza.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.02 }}
                  className={styles.pizzaCard}
                >
                  <div className={styles.pizzaCardInner}>
                    <div className={styles.pizzaHeader}>
                      <h3>{pizza.name}</h3>
                      <Image
                        src="/images/pizza.jpg"
                        alt={pizza.name}
                        width={50}
                        height={50}
                        className={styles.pizzaImageSmall}
                      />
                    </div>
                    <p className={styles.ingredients}>{pizza.ingredients.join(', ')}</p>
                    <div className={styles.pizzaPrices}>
                      <span><small>J</small> {pizza.prices.junior.toFixed(2)}€</span>
                      <span><small>S</small> {pizza.prices.senior.toFixed(2)}€</span>
                      <span><small>M</small> {pizza.prices.mega.toFixed(2)}€</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 'sandwichs':
        return (
          <div className={styles.categoryContent}>
            <p className={styles.categoryInfo}>Servis avec Frites + Salade + Tomates + Sauce au choix • Pain maison ou Tortilla</p>
            <div className={styles.itemsList}>
              {sandwichs.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.03 }}
                  className={styles.listItem}
                >
                  <Image
                    src="/images/sandwich.jpg"
                    alt={item.name}
                    width={60}
                    height={60}
                    className={styles.listItemImage}
                  />
                  <div className={styles.listItemMain}>
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                  </div>
                  <span className={styles.price}>{item.price.toFixed(2)}€</span>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 'tacos':
        return (
          <div className={styles.categoryContent}>
            <p className={styles.categoryInfo}>Viande au choix + Pommes de terre + Sauce fromagère + Frites</p>

            <div className={styles.subSection}>
              <h3 className={styles.subTitle}>Tacos</h3>
              <div className={styles.sizesGrid}>
                {tacosSizes.map((size) => (
                  <div key={size.name} className={styles.sizeCard}>
                    <span className={styles.sizeName}>{size.name}</span>
                    <span className={styles.sizeDetail}>{size.viandes} viande{size.viandes > 1 ? 's' : ''}</span>
                    <span className={styles.sizePrice}>{size.price.toFixed(2)}€</span>
                  </div>
                ))}
              </div>
              <p className={styles.choiceInfo}>
                <strong>Viandes :</strong> {tacosViandes.join(' • ')}
              </p>
              <p className={styles.choiceInfo}>
                <strong>Suppléments (+1€) :</strong> {tacosSupplements.map(s => s.name).join(' • ')}
              </p>
            </div>

            <div className={styles.subSection}>
              <h3 className={styles.subTitle}>Bowls</h3>
              <div className={styles.sizesGrid}>
                {bowlsSizes.map((size) => (
                  <div key={size.name} className={styles.sizeCard}>
                    <span className={styles.sizeName}>{size.name}</span>
                    <span className={styles.sizeDetail}>{size.viandes} viande{size.viandes > 1 ? 's' : ''}</span>
                    <span className={styles.sizePrice}>{size.price.toFixed(2)}€</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'burgers':
        return (
          <div className={styles.categoryContent}>
            <p className={styles.categoryInfo}>Servis avec Frites + 1 Boisson 33cl</p>
            <div className={styles.itemsList}>
              {burgers.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={styles.listItem}
                >
                  <Image
                    src="/images/burger.jpg"
                    alt={item.name}
                    width={60}
                    height={60}
                    className={styles.listItemImage}
                  />
                  <div className={styles.listItemMain}>
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                  </div>
                  <span className={styles.price}>{item.price.toFixed(2)}€</span>
                </motion.div>
              ))}
            </div>

            <div className={styles.subSection}>
              <h3 className={styles.subTitle}>Menus Burgers</h3>
              <div className={styles.itemsList}>
                {menusBurgers.map((item, index) => (
                  <div key={item.name} className={styles.listItem}>
                    <div className={styles.listItemMain}>
                      <h4>{item.name}</h4>
                      <p>{item.description}</p>
                    </div>
                    <span className={styles.price}>{item.price.toFixed(2)}€</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'texmex':
        return (
          <div className={styles.categoryContent}>
            <p className={styles.categoryInfo}>Servis avec Frites ou Potatoes</p>
            <div className={styles.itemsList}>
              {texMex.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.03 }}
                  className={styles.listItem}
                >
                  <div className={styles.listItemMain}>
                    <h4>{item.name} {item.pieces && <span className={styles.pieces}>({item.pieces} pièces)</span>}</h4>
                    {item.description && <p>{item.description}</p>}
                  </div>
                  <span className={styles.price}>{item.price.toFixed(2)}€</span>
                </motion.div>
              ))}
            </div>
            <div className={styles.accompSection}>
              <h4>Accompagnements</h4>
              <div className={styles.accompGrid}>
                {accompagnements.map((item) => (
                  <div key={item.name} className={styles.accompItem}>
                    <span>{item.name}</span>
                    <span>{item.price.toFixed(2)}€</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'salades':
        return (
          <div className={styles.categoryContent}>
            <div className={styles.subSection}>
              <h3 className={styles.subTitle}>Salades - {saladesPrice.toFixed(2)}€</h3>
              <p className={styles.categoryInfo}>Servies avec pain et sauce vinaigrette</p>
              <div className={styles.itemsList}>
                {salades.map((item, index) => (
                  <div key={item.name} className={styles.simpleListItem}>
                    <h4>{item.name}</h4>
                    <p>{item.ingredients.join(', ')}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.subSection}>
              <h3 className={styles.subTitle}>Pâtes - {patesPrice.toFixed(2)}€</h3>
              <p className={styles.categoryInfo}>Pennes al dente servies avec du parmesan</p>
              <div className={styles.itemsList}>
                {pates.map((item, index) => (
                  <div key={item.name} className={styles.simpleListItem}>
                    <h4>{item.name}</h4>
                    <p>{item.ingredients.join(', ')}</p>
                  </div>
                ))}
                <div className={styles.listItem}>
                  <div className={styles.listItemMain}>
                    <h4>{lasagne.name}</h4>
                  </div>
                  <span className={styles.price}>{lasagne.price.toFixed(2)}€</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'paninis':
        return (
          <div className={styles.categoryContent}>
            <div className={styles.paniniHeader}>
              <span className={styles.paniniPrice}>Prix unique : {paninis.price.toFixed(2)}€</span>
              <p>Base : Sauce tomate ou crème fraîche + mozzarella</p>
            </div>
            <div className={styles.paniniGrid}>
              {paninis.garnitures.map((garniture) => (
                <div key={garniture} className={styles.paniniItem}>
                  {garniture}
                </div>
              ))}
            </div>
          </div>
        );

      case 'boissons':
        return (
          <div className={styles.categoryContent}>
            <div className={styles.subSection}>
              <h3 className={styles.subTitle}>Canettes 33cl</h3>
              <div className={styles.drinksList}>
                {canettes33cl.map((item) => (
                  <div key={item.name} className={styles.drinkItem}>
                    <span>{item.name}</span>
                    <span className={styles.drinkPrice}>{item.price.toFixed(2)}€</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.subSection}>
              <h3 className={styles.subTitle}>Bouteilles</h3>
              <div className={styles.drinksList}>
                {bouteilles.map((item) => (
                  <div key={item.name} className={styles.drinkItem}>
                    <span>{item.name}</span>
                    <span className={styles.drinkPrice}>{item.price.toFixed(2)}€</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'desserts':
        return (
          <div className={styles.categoryContent}>
            <div className={styles.dessertsGrid}>
              {desserts.map((item) => (
                <div key={item.name} className={styles.dessertCard}>
                  <span className={styles.dessertName}>{item.name}</span>
                  <span className={styles.dessertPrice}>{item.price.toFixed(2)}€</span>
                </div>
              ))}
            </div>

            <div className={styles.subSection}>
              <h3 className={styles.subTitle}>Glaces {glaces.marque}</h3>
              <div className={styles.glacesGrid}>
                {glaces.sizes.map((size) => (
                  <div key={size.name} className={styles.glaceItem}>
                    <span>{size.name}</span>
                    <span className={styles.glacePrice}>{size.price.toFixed(2)}€</span>
                  </div>
                ))}
              </div>
              <p className={styles.glaceNote}>{glaces.note}</p>
            </div>
          </div>
        );

      case 'menus':
        return (
          <div className={styles.categoryContent}>
            <p className={styles.categoryInfo}>Des formules avantageuses pour tous les appétits</p>
            <div className={styles.menusGrid}>
              {menus.map((menu, index) => (
                <motion.div
                  key={menu.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className={styles.menuCard}
                >
                  <div className={styles.menuBadge}>{menu.name}</div>
                  <p className={styles.menuContent}>{menu.content}</p>
                  <div className={styles.menuPrice}>{menu.price.toFixed(2)}€</div>
                </motion.div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="menu" className={styles.menuSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Notre Carte</h2>
          <p>Découvrez toutes nos spécialités</p>
        </div>

        <div className={styles.tabsWrapper} ref={tabsRef}>
          <div className={styles.tabs}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                data-tab={cat.id}
                className={`${styles.tab} ${activeTab === cat.id ? styles.active : ''}`}
                onClick={() => setActiveTab(cat.id)}
              >
                <Image
                  src={cat.image}
                  alt={cat.label}
                  width={36}
                  height={36}
                  className={styles.tabImage}
                />
                <span className={styles.tabLabel}>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={styles.content}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
