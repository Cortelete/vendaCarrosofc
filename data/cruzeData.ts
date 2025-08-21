import { Zap, ShieldCheck, Users, Trophy, BookCheck, Gem, Sofa, Star } from 'lucide-react';
import type { CarData } from '../types';

export const cruzeData: CarData = {
  pageTitle: 'Chevrolet Cruze LTZ 1.4 Turbo 2018 - Oportunidade Única',
  carName: 'Chevrolet Cruze LTZ 2018 1.4 Turbo Sedan',
  headerTitle: 'Chevrolet Cruze LTZ',
  hero: {
    title: 'Chevrolet Cruze LTZ',
    subtitle: '2018/2018 1.4 Turbo Sedan',
    price: 'R$ 90.000',
    images: Array.from({ length: 8 }, (_, i) => `/public/cruze${i+1}.png`),
    highlights: [
      { icon: Trophy, text: "Único Dono" },
      { icon: ShieldCheck, text: "Laudo Aprovado" },
      { icon: BookCheck, text: "Revisões em Dia" },
      { icon: Users, text: "Negociação Particular" },
      { icon: Zap, text: "Motor 1.4 Turbo Flex" },
      { icon: Star, text: "Versão LTZ Completa" },
    ]
  },
  idealCar: {
    title: 'Para quem busca <span class="animated-gradient-text-style">luxo, performance e segurança</span>',
    subtitle: "O Chevrolet Cruze LTZ é a versão topo de linha, combinando design sofisticado, motor turbo eficiente e um pacote completo de tecnologia e segurança para a sua família.",
    benefits: [
      { icon: ShieldCheck, title: "Segurança Total para a Família", description: "Equipado com múltiplos airbags e controle de estabilidade. Veículo com laudo cautelar aprovado para sua total tranquilidade." },
      { icon: Sofa, title: "Conforto e Tecnologia a Bordo", description: "Interior com bancos de couro, MyLink e retrovisores rebatíveis para viagens mais agradáveis e conectadas." },
      { icon: Zap, title: "Performance e Economia", description: "Motor 1.4 Turbo com 153cv para ultrapassagens seguras e excelente consumo, combinando o melhor dos dois mundos." },
      { icon: Gem, title: "Estilo e Exclusividade LTZ", description: "A versão topo de linha com acabamentos premium, chave presencial e sistema Start-Stop. Um carro que se destaca por onde passa." },
    ]
  },
  details: {
    title: "Detalhes do Veículo",
    subtitle: "Tudo o que você precisa saber sobre este Cruze LTZ.",
    specs: [
      { label: 'Motorização', value: '1.4 Turbo Flex' },
      { label: 'Potência Máxima', value: '153 cv (E) / 150 cv (G)' },
      { label: 'Câmbio', value: 'Automático de 6 Marchas' },
      { label: 'Consumo Urbano', value: '7.6 km/l (E) / 11.2 km/l (G)' },
      { label: 'Consumo Rodoviário', value: '9.6 km/l (E) / 14.0 km/l (G)' },
      { label: 'Destaques LTZ', value: 'Couro, MyLink, Start-Stop, Chave Presencial, Retrovisores Rebatíveis' },
      { label: 'Documentação', value: 'Sem restrições, Laudo Aprovado' }
    ]
  },
  contact: {
    ownerPhoneNumber: '5541988710303',
  }
};