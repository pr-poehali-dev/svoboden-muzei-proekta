import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface SvoHeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const SvoHeader = ({ activeSection, setActiveSection }: SvoHeaderProps) => {
  return (
    <>
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-patriotic-blue rounded-lg flex items-center justify-center">
                <Icon name="Star" size={24} className="text-white" />
              </div>
              <span className="text-xl font-bold text-patriotic-blue">СВО.ГАЛЕРЕЯ</span>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <Button
                variant={activeSection === 'main' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('main')}
                className="text-sm"
              >
                <Icon name="Home" size={16} className="mr-2" />
                Главная
              </Button>
              <Button
                variant={activeSection === 'heroes' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('heroes')}
                className="text-sm"
              >
                <Icon name="Users" size={16} className="mr-2" />
                Герои
              </Button>
              <Button
                variant={activeSection === 'achievements' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('achievements')}
                className="text-sm"
              >
                <Icon name="Award" size={16} className="mr-2" />
                Достижения
              </Button>
              <Button
                variant={activeSection === 'stories' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('stories')}
                className="text-sm"
              >
                <Icon name="FileText" size={16} className="mr-2" />
                Истории
              </Button>
            </div>
            <Button variant="outline" size="sm">
              <Icon name="Menu" size={16} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] bg-gradient-to-br from-patriotic-blue via-white to-patriotic-red flex items-center">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/90 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
              <Icon name="Star" size={20} className="text-patriotic-blue mr-2" />
              <span className="text-patriotic-blue font-medium">Галерея подвигов СВО</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Летопись подвигов<br />
              <span className="text-patriotic-blue bg-white/90 px-4 py-2 rounded-lg">
                СВО
              </span>
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Цифровой архив героических поступков, достижений и подвигов участников 
              специальной военной операции на Украине
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg"
                className="bg-patriotic-blue hover:bg-patriotic-blue/90 text-white px-8 py-4 text-lg"
                onClick={() => setActiveSection('heroes')}
              >
                <Icon name="Users" size={20} className="mr-2" />
                Бессмертный полк СВО
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-patriotic-red text-patriotic-red hover:bg-patriotic-red hover:text-white px-8 py-4 text-lg"
                onClick={() => setActiveSection('achievements')}
              >
                <Icon name="Award" size={20} className="mr-2" />
                Галерея достижений
              </Button>
            </div>
          </div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-patriotic-blue rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-patriotic-red rounded-full blur-xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-yellow-400 rounded-full blur-lg"></div>
        </div>
      </section>
    </>
  );
};

export default SvoHeader;