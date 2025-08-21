import { Shield, Sofa, Rocket, Gem, Award, Car, BatteryCharging, Users, Fuel, Tag } from 'lucide-react';
import type { CarData } from '../types';

export const etiosData: CarData = {
  pageTitle: 'Toyota Etios XS 1.5 Seminovo 2016 - Oportunidade Única',
  carName: 'Toyota Etios XS 2016 1.5 Flex',
  headerTitle: 'Toyota Etios',
  hero: {
    title: 'Toyota Etios XS',
    subtitle: '2016/2016 1.5 Flex Manual',
    price: 'R$ 55.000',
    images: Array.from({ length: 8 }, (_, i) => `/public/etios${i+1}.png`),
    highlights: [
      { icon: Award, text: "Manual e Chave Reserva" },
      { icon: Car, text: "Pneus em Ótimo Estado" },
      { icon: BatteryCharging, text: "Bateria Nova" },
      { icon: Users, text: "Negociação Particular" },
      { icon: Fuel, text: "Motor 1.5 Super Econômico" },
      { icon: Tag, text: "Versão XS" },
    ]
  },
  idealCar: {
    title: 'Para você que busca <span class="animated-gradient-text-style">economia, confiabilidade e versatilidade</span>',
    subtitle: "O Toyota Etios é a escolha inteligente para o seu dia a dia. Famoso por seu baixo custo de manutenção e a lendária durabilidade da Toyota, ele oferece tranquilidade e um excelente valor de revenda.",
    benefits: [
      { icon: Shield, title: "Segurança Essencial", description: "Equipado com airbags frontais e freios ABS para garantir a proteção da sua família em todos os percursos." },
      { icon: Sofa, title: "Prático e Confortável", description: "Direção elétrica, ar-condicionado e um interior espaçoso que garantem conforto e praticidade no uso diário." },
      { icon: Rocket, title: "Economia Imbatível", description: "Reconhecido motor 1.5 Flex, sinônimo de baixo consumo de combustível e excelente desempenho na cidade e na estrada." },
      { icon: Gem, title: "Cuidado e Procedência", description: "Carro de particular com excelente histórico de manutenção, incluindo bateria nova e pneus em ótimo estado." }
    ]
  },
  details: {
    title: "Detalhes do Veículo",
    subtitle: "Tudo o que você precisa saber sobre este Etios.",
    specs: [
      { label: 'Motorização', value: '1.5 Flex' },
      { label: 'Potência Máxima', value: '107 cv (E) / 102 cv (G)' },
      { label: 'Câmbio', value: 'Manual de 6 Marchas' },
      { label: 'Consumo Urbano', value: '8.4 km/l (E) / 12.4 km/l (G)' },
      { label: 'Consumo Rodoviário', value: '9.8 km/l (E) / 14.2 km/l (G)' },
      { label: 'Destaques XS', value: 'Ar-condicionado, Direção Elétrica, Vidros e Travas Elétricas, Sistema de Áudio com Bluetooth' },
      { label: 'Documentação', value: 'IPVA 2024 Pago, Sem Restrições' }
    ]
  },
  contact: {
    ownerPhoneNumber: '5541988710303',
  }
};