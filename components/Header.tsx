import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowLeft } from 'lucide-react';

interface HeaderProps {
  carTitle: string;
  onContactClick: () => void;
  onBack?: () => void;
}

const Header: React.FC<HeaderProps> = ({ carTitle, onContactClick, onBack }) => {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-0 z-50 py-4 bg-black/30 backdrop-blur-lg"
    >
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          {onBack && (
            <motion.button
              onClick={onBack}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Voltar"
            >
              <ArrowLeft size={20} />
            </motion.button>
          )}
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight animated-gradient-text-style">
            {carTitle}
          </h1>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onContactClick}
          className="flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300"
        >
          <Phone size={16} />
          <span>Tenho Interesse</span>
        </motion.button>
      </div>
    </motion.header>
  );
};

export default Header;
