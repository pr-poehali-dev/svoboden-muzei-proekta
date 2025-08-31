import React, { useState } from 'react';
import MuseumHeader from '@/components/museum/MuseumHeader';
import MainSection from '@/components/museum/MainSection';
import ChronologySection from '@/components/museum/ChronologySection';
import ResourcesSection from '@/components/museum/ResourcesSection';
import HeroicGallery from '@/components/museum/HeroicGallery';

const Index = () => {
  const [activeSection, setActiveSection] = useState('main');

  return (
    <div className="min-h-screen bg-gray-50">
      <MuseumHeader activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {activeSection === 'main' && <MainSection />}
      {activeSection === 'chronology' && <ChronologySection />}
      {activeSection === 'resources' && <ResourcesSection />}
      {activeSection === 'gallery' && <HeroicGallery />}
      
      <footer className="bg-patriotic-blue text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xl font-bold mb-2">Виртуальный музей СВО для школьников</p>
          <p className="text-blue-100">
            Образовательный проект для сохранения исторической памяти
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;