import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface MuseumHeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const MuseumHeader = ({ activeSection, setActiveSection }: MuseumHeaderProps) => {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-patriotic-blue rounded-lg flex items-center justify-center">
              <Icon name="Building" size={28} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-patriotic-blue">
                Виртуальный музей СВО
              </h1>
              <p className="text-sm text-gray-600">для школьников</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-2">
            <Button
              variant={activeSection === 'main' ? 'default' : 'ghost'}
              onClick={() => setActiveSection('main')}
              className="px-6"
            >
              <Icon name="Home" size={18} className="mr-2" />
              Главная
            </Button>
            <Button
              variant={activeSection === 'chronology' ? 'default' : 'ghost'}
              onClick={() => setActiveSection('chronology')}
              className="px-6"
            >
              <Icon name="Clock" size={18} className="mr-2" />
              Хронология
            </Button>
            <Button
              variant={activeSection === 'resources' ? 'default' : 'ghost'}
              onClick={() => setActiveSection('resources')}
              className="px-6"
            >
              <Icon name="BookOpen" size={18} className="mr-2" />
              Ресурсы
            </Button>
            <Button
              variant={activeSection === 'gallery' ? 'default' : 'ghost'}
              onClick={() => setActiveSection('gallery')}
              className="px-6"
            >
              <Icon name="Award" size={18} className="mr-2" />
              Галерея подвигов
            </Button>
          </nav>
          
          <Button variant="outline" className="md:hidden">
            <Icon name="Menu" size={20} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default MuseumHeader;