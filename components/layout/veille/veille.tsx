'use client';
import React from 'react';
import { motion } from 'framer-motion';
import VeilleHeader from './VeilleHeader';
import VeilleSection from './VeilleSection';
import VeilleSchema from './VeilleSchema';
import VeilleConclusion from './VeilleConclusion';
import VeilleListItem from './VeilleListItem';
import VeilleSubListItem from './VeilleSubListItem';

const Veille: React.FC = () => {
  const conclusionPoints = [
    "Framework puissant et flexible pour le développement web moderne",
    "Optimisation automatique des performances et du référencement",
    "Expérience utilisateur fluide avec rendu hybride",
    "Écosystème riche et communauté active"
  ];

  return (
    <div className="bg-gradient-to-b from-white to-amber-50 min-h-screen">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto px-4 py-16 font-sans"
      >
        <VeilleHeader 
          title="Next.js: Le Framework React du Futur" 
          description="Découvrez comment Next.js révolutionne le développement d'applications web modernes, performantes et optimisées pour le référencement." 
        />

        <div className="space-y-16">
          <VeilleSection number={1} title="Qu'est-ce que Next.js ?">
            <ul className="space-y-4">
              <VeilleListItem>Framework React avancé développé par Vercel</VeilleListItem>
              <VeilleListItem>Solution complète pour créer des applications web performantes</VeilleListItem>
              <VeilleListItem>Optimisation native du référencement (SEO)</VeilleListItem>
              <VeilleListItem>Génération de sites statiques et dynamiques</VeilleListItem>
            </ul>
          </VeilleSection>

          <VeilleSection number={2} title="Fonctionnalités principales">
            <ul className="space-y-6">
              <VeilleListItem>
                <div>
                  <span className="font-medium text-gray-800">Méthodes de rendu flexibles:</span>
                  <ul className="mt-4 ml-2 space-y-3">
                    <VeilleSubListItem>
                      <span className="font-medium text-amber-600">Static Generation (SSG):</span> Pages générées au moment de la compilation
                    </VeilleSubListItem>
                    <VeilleSubListItem>
                      <span className="font-medium text-amber-600">Server-Side Rendering (SSR):</span> Pages générées à chaque requête
                    </VeilleSubListItem>
                    <VeilleSubListItem>
                      <span className="font-medium text-amber-600">Incremental Static Regeneration (ISR):</span> Mise à jour des pages statiques en arrière-plan
                    </VeilleSubListItem>
                  </ul>
                </div>
              </VeilleListItem>
              <VeilleListItem>Système de routage basé sur le système de fichiers</VeilleListItem>
              <VeilleListItem>API Routes pour créer des endpoints backend</VeilleListItem>
              <VeilleListItem>Optimisation automatique des images et des polices</VeilleListItem>
            </ul>
          </VeilleSection>

          <VeilleSection number={3} title="Avantages pour les développeurs">
            <ul className="space-y-6">
              <VeilleListItem>Développement rapide avec hot-reloading</VeilleListItem>
              <VeilleListItem>Écosystème riche de plugins et d'intégrations</VeilleListItem>
              <VeilleListItem>Support TypeScript natif</VeilleListItem>
              <VeilleListItem>
                <div>
                  <span className="font-medium text-gray-800">Cas d'utilisation idéaux:</span>
                  <ul className="mt-4 ml-2 space-y-3">
                    <VeilleSubListItem>Sites e-commerce à haute performance</VeilleSubListItem>
                    <VeilleSubListItem>Applications SaaS complexes</VeilleSubListItem>
                    <VeilleSubListItem>Blogs et sites de contenu optimisés pour le SEO</VeilleSubListItem>
                    <VeilleSubListItem>Dashboards et interfaces administratives</VeilleSubListItem>
                  </ul>
                </div>
              </VeilleListItem>
            </ul>
            
            <div className="mt-10 p-6 bg-amber-50 rounded-xl border border-amber-100 shadow-sm">
              <p className="text-gray-800 mb-4">
                <span className="font-bold text-amber-700">Entreprises utilisant Next.js:</span>
              </p>
              <div className="flex flex-wrap gap-3">
                {['Netflix', 'TikTok', 'Twitch', 'Hulu', 'Vercel', 'GitHub'].map((company, index) => (
                  <motion.span 
                    key={index}
                    whileHover={{ scale: 1.05, y: -3 }}
                    className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-amber-700 shadow-sm hover:shadow-md transition-all duration-300 border border-amber-100"
                  >
                    {company}
                  </motion.span>
                ))}
              </div>
            </div>
          </VeilleSection>
        </div>

        <VeilleSchema />
        
        <VeilleConclusion points={conclusionPoints} />
      </motion.div>
    </div>
  );
};

export default Veille;