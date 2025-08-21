import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import CarLandingPage from './components/CarLandingPage';
import { etiosData } from './data/etiosData';
import { cruzeData } from './data/cruzeData';

type Page = 'home' | 'etios' | 'cruze';

const App: React.FC = () => {
  const [page, setPage] = useState<Page>('home');

  const handleNavigate = (newPage: Page) => {
    setPage(newPage);
    window.scrollTo(0, 0);
  };
  
  const handleBack = () => {
    setPage('home');
     window.scrollTo(0, 0);
  }
  
  useEffect(() => {
    let title = "Venda de Carros - Oportunidade Única";
    if (page === 'etios') title = etiosData.pageTitle;
    if (page === 'cruze') title = cruzeData.pageTitle;
    document.title = title;
  }, [page]);


  const renderPage = () => {
    switch(page) {
      case 'etios':
        return <CarLandingPage carData={etiosData} onBack={handleBack} />;
      case 'cruze':
        return <CarLandingPage carData={cruzeData} onBack={handleBack} />;
      case 'home':
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return <div className="min-h-screen">{renderPage()}</div>;
};

export default App;
