import React, { useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import IdealCarSection from './IdealCarSection';
import VehicleDetails from './VehicleDetails';
import Footer from './Footer';
import ContactModal from './ContactModal';
import type { CarData } from '../types';
import { MessageSquare } from 'lucide-react';

interface CarLandingPageProps {
  carData: CarData;
  onBack: () => void;
}

const CarLandingPage: React.FC<CarLandingPageProps> = ({ carData, onBack }) => {
  const [isCarModalOpen, setIsCarModalOpen] = useState(false);
  const [isDevModalOpen, setIsDevModalOpen] = useState(false);
  
  const [carContactName, setCarContactName] = useState('');
  const [carContactCity, setCarContactCity] = useState('');
  const [devContactName, setDevContactName] = useState('');

  const handleCarContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Dados do formulário - Nome: ${carContactName}, Cidade: ${carContactCity} - Olá! Olhei o ${carData.carName} e achei interessante, quero ver mais!`;
    const whatsappUrl = `https://wa.me/${carData.contact.ownerPhoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setIsCarModalOpen(false);
  };

  const handleDevContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const clientName = carData.carName.split(' ')[0]; // Pega o primeiro nome do carro como "cliente"
    const message = `Olá, meu nome é ${devContactName}. Vi o link do ${clientName} e quero um site igual!`;
    const devPhoneNumber = '5541988710303';
    const whatsappUrl = `https://wa.me/${devPhoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setIsDevModalOpen(false);
  };

  return (
    <div className="relative overflow-x-hidden bg-black/30">
      <Header 
        carTitle={carData.headerTitle} 
        onContactClick={() => setIsCarModalOpen(true)} 
        onBack={onBack}
      />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Hero 
          carName={carData.carName}
          heroData={carData.hero}
          onContactClick={() => setIsCarModalOpen(true)} 
        />
        <IdealCarSection idealCarData={carData.idealCar} />
        <VehicleDetails detailsData={carData.details} />
      </main>
      <Footer onContactClick={() => setIsDevModalOpen(true)} />

      {/* Modal de Contato para o Carro */}
      <ContactModal
        isOpen={isCarModalOpen}
        onClose={() => setIsCarModalOpen(false)}
        title={`Interesse no ${carData.carName}`}
      >
        <form onSubmit={handleCarContactSubmit} className="flex flex-col gap-4">
          <p className="text-sm text-gray-400 mb-2">Preencha seus dados para agilizar o atendimento com o proprietário.</p>
          <div>
            <label htmlFor="car-name" className="text-xs font-semibold text-gray-400">Seu nome</label>
            <input
              id="car-name"
              type="text"
              value={carContactName}
              onChange={(e) => setCarContactName(e.target.value)}
              placeholder="Ex: João Silva"
              required
              className="mt-1 w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
            />
          </div>
          <div>
            <label htmlFor="car-city" className="text-xs font-semibold text-gray-400">Sua cidade e estado</label>
            <input
              id="car-city"
              type="text"
              value={carContactCity}
              onChange={(e) => setCarContactCity(e.target.value)}
              placeholder="Ex: Curitiba, PR"
              required
              className="mt-1 w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
            />
          </div>
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-3 mt-4 px-6 py-3 font-bold text-lg bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:scale-105 transition-transform duration-300"
          >
            <MessageSquare size={20} />
            Enviar para WhatsApp
          </button>
        </form>
      </ContactModal>

      {/* Modal de Contato para o Desenvolvedor */}
      <ContactModal
        isOpen={isDevModalOpen}
        onClose={() => setIsDevModalOpen(false)}
        title="Fale com o Desenvolvedor"
      >
         <form onSubmit={handleDevContactSubmit} className="flex flex-col gap-4">
          <p className="text-sm text-gray-400 mb-2">Que legal que você gostou! Me diga seu nome para começarmos a conversa.</p>
          <div>
            <label htmlFor="dev-name" className="text-xs font-semibold text-gray-400">Seu nome</label>
            <input
              id="dev-name"
              type="text"
              value={devContactName}
              onChange={(e) => setDevContactName(e.target.value)}
              placeholder="Ex: Maria Souza"
              required
              className="mt-1 w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
            />
          </div>
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-3 mt-4 px-6 py-3 font-bold text-lg bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:scale-105 transition-transform duration-300"
          >
            <MessageSquare size={20} />
            Iniciar Conversa
          </button>
        </form>
      </ContactModal>
    </div>
  );
};

export default CarLandingPage;