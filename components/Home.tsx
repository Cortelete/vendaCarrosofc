import React from 'react';
import { motion } from 'framer-motion';

interface HomeProps {
  onNavigate: (page: 'etios' | 'cruze') => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter animated-gradient-text-style">
          Oportunidade Única
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Dois veículos de procedência, bem cuidados e prontos para um novo dono. Escolha o carro que mais combina com você.
        </p>
         <p className="mt-2 text-sm text-gray-500">Venda de particular para particular, sem empresas envolvidas.</p>
      </motion.div>

      <motion.div 
        className="mt-12 flex flex-col md:flex-row gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        {/* Etios Card */}
        <motion.div 
          whileHover={{ y: -10, boxShadow: '0 25px 50px -12px rgba(142, 45, 226, 0.25)' }}
          className="w-full md:w-80 p-8 bg-black/30 backdrop-blur-lg border border-white/10 rounded-2xl cursor-pointer"
          onClick={() => onNavigate('etios')}
        >
          <h2 className="text-3xl font-bold text-white">Toyota Etios</h2>
          <p className="text-gray-400 mt-1">2016 | 1.5 Flex</p>
          <p className="mt-4 text-purple-300 font-semibold">Economia, Confiabilidade e Conforto!</p>
          <button className="mt-6 w-full py-3 font-bold bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-all">
            Ver Detalhes
          </button>
        </motion.div>
        
        {/* Cruze Card */}
        <motion.div 
          whileHover={{ y: -10, boxShadow: '0 25px 50px -12px rgba(255, 0, 128, 0.25)' }}
          className="w-full md:w-80 p-8 bg-black/30 backdrop-blur-lg border border-white/10 rounded-2xl cursor-pointer"
          onClick={() => onNavigate('cruze')}
        >
          <h2 className="text-3xl font-bold text-white">Chevrolet Cruze LTZ</h2>
          <p className="text-gray-400 mt-1">2018 | 1.4 Turbo Sedan</p>
          <p className="mt-4 text-pink-300 font-semibold">Luxo, Performance e Segurança</p>
          <button className="mt-6 w-full py-3 font-bold bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-all">
            Ver Detalhes
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;