import type { Metadata } from 'next';
import './globals.scss';

export const metadata: Metadata = {
  title: 'YouPizza - Tout le monde l\'adore !',
  description: 'YouPizza - Restaurant pizzeria à Sainte Geneviève des Bois. Pizzas, Sandwichs, Tacos, Burgers. Livraison gratuite. 100% Halal. Pâte fraîche maison.',
  keywords: 'pizza, pizzeria, livraison, halal, sainte genevieve des bois, 91700, tacos, burgers, sandwichs',
  authors: [{ name: 'YouPizza' }],
  openGraph: {
    title: 'YouPizza - Tout le monde l\'adore !',
    description: 'Restaurant pizzeria à Sainte Geneviève des Bois. Pizzas, Sandwichs, Tacos, Burgers. Livraison gratuite.',
    type: 'website',
    locale: 'fr_FR',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
