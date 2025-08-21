import React from 'react';
import { motion } from 'framer-motion';
import type { DetailsData } from '../types';

interface VehicleDetailsProps {
  detailsData: DetailsData;
}

const VehicleDetails: React.FC<VehicleDetailsProps> = ({ detailsData }) => {
  const listVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { when: "beforeChildren", staggerChildren: 0.1 } } };
  const itemVariants = { hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } };

  return (
    <section className="py-16 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold">{detailsData.title}</h2>
        <p className="mt-2 text-gray-400">{detailsData.subtitle}</p>
      </motion.div>

      <div className="mt-12 max-w-4xl mx-auto">
        <div className="bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm p-8">
          <motion.ul 
            className="divide-y divide-white/10"
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {detailsData.specs.map((detail, index) => (
              <motion.li key={index} className="py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center" variants={itemVariants}>
                <span className="font-semibold text-gray-300">{detail.label}</span>
                <span className="text-lg font-bold text-right text-white">{detail.value}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default VehicleDetails;
