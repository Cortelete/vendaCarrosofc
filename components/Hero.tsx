import React from 'react';
import { useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { HeroData } from '../types';

interface HeroProps {
  carName: string;
  heroData: HeroData;
  onContactClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ carName, heroData, onContactClick }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [currentSlide, setCurrentSlide] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  
  const onSelect = useCallback(() => {
    if (emblaApi) setCurrentSlide(emblaApi.selectedScrollSnap());
  }, [emblaApi, setCurrentSlide]);

  useEffect(() => {
    if (emblaApi) {
      onSelect();
      emblaApi.on('select', onSelect).on('reInit', onSelect);
    }
  }, [emblaApi, onSelect]);

  return (
    <section className="py-16 sm:py-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter animated-gradient-text-style">{heroData.title}</h2>
        <p className="mt-2 text-lg sm:text-xl text-gray-400">{heroData.subtitle}</p>
        <p className="mt-4 text-4xl sm:text-5xl font-bold text-white">{heroData.price}</p>
      </motion.div>
      
      <motion.div 
        className="mt-10 relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {heroData.images.map((src, index) => (
              <div key={index} className="embla__slide">
                <img src={src} alt={`${carName} - Foto ${index + 1}`} className="w-full h-auto object-cover rounded-2xl shadow-2xl shadow-purple-900/20" />
              </div>
            ))}
          </div>
        </div>
        <button onClick={scrollPrev} className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/80 transition-all duration-300 z-10" aria-label="Previous image">
          <ChevronLeft size={24} />
        </button>
        <button onClick={scrollNext} className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/80 transition-all duration-300 z-10" aria-label="Next image">
          <ChevronRight size={24} />
        </button>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {heroData.images.map((_, index) => (
                <button 
                    key={index} 
                    onClick={() => emblaApi?.scrollTo(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'}`}
                    aria-label={`Go to slide ${index + 1}`}
                />
            ))}
        </div>
      </motion.div>

      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-left">
        {heroData.highlights.map((item, index) => (
          <motion.div 
            key={item.text}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center text-center p-4 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm"
          >
            <item.icon className="w-8 h-8 mb-2 animated-gradient-text-style" />
            <span className="text-sm font-semibold">{item.text}</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-12"
      >
        <button onClick={onContactClick} className="px-10 py-4 font-bold text-lg bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-500/30">
          Quero este carro!
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
