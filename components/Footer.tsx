
import React from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

interface FooterProps {
  onContactClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onContactClick }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 bg-black/50 border-t border-white/10 mt-16">
      <div className="container mx-auto text-center text-gray-400 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6"
        >
          <div>
            <h3 className="text-xl font-bold text-white">Quer um site incrível como esse?</h3>
            <p className="mt-2 max-w-lg mx-auto">Esta landing page foi desenvolvida para destacar o melhor do produto e gerar mais vendas. Fale comigo!</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255, 0, 128, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            onClick={onContactClick}
            className="flex items-center gap-2 px-6 py-3 font-bold text-white bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg transition-all duration-300"
          >
            <Rocket size={20} />
            <span>Fale com o Desenvolvedor</span>
          </motion.button>
          <div className="mt-6 border-t border-white/10 w-full pt-6">
             <a 
              href="https://www.instagram.com/inteligenciarte.ia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm hover:text-white transition-colors"
            >
              Desenvolvido por <span className="font-bold animated-gradient-text-style">InteligenciArte.IA</span> ✨
            </a>
            <p className="mt-2 text-xs text-gray-500">&copy; {year} Todos os direitos reservados. Anúncio particular.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;