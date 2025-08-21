import React from 'react';
import { motion } from 'framer-motion';
import type { IdealCarData } from '../types';

interface IdealCarSectionProps {
  idealCarData: IdealCarData;
}

const IdealCarSection: React.FC<IdealCarSectionProps> = ({ idealCarData }) => {
  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };
  const itemVariants = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } };

  return (
    <section className="py-16 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight" dangerouslySetInnerHTML={{ __html: idealCarData.title }} />
        <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-400">{idealCarData.subtitle}</p>
      </motion.div>

      <motion.div 
        className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {idealCarData.benefits.map((benefit, index) => (
          <motion.div 
            key={index} 
            className="p-8 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm text-center transform hover:scale-105 hover:border-purple-500/50 transition-all duration-300"
            variants={itemVariants}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block p-4 bg-purple-900/50 rounded-lg">
              <benefit.icon className="w-8 h-8 text-purple-300" />
            </div>
            <h3 className="mt-6 text-xl font-bold">{benefit.title}</h3>
            <p className="mt-2 text-gray-400">{benefit.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default IdealCarSection;
