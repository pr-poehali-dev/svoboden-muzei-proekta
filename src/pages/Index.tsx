import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const sections = [
    {
      id: 'history',
      title: 'История СВО',
      description: 'Хронология событий и ключевые моменты специальной военной операции',
      icon: 'BookOpen',
      stats: '150+ фактов'
    },
    {
      id: 'gallery',
      title: 'Галерея',
      description: 'Фотографии, видеоматериалы и документы с театра военных действий',
      icon: 'Image',
      stats: '500+ материалов'
    },
    {
      id: 'heroes',
      title: 'Герои',
      description: 'Истории мужества и героизма участников СВО',
      icon: 'Star',
      stats: '200+ историй'
    },
    {
      id: 'resources',
      title: 'Ресурсы',
      description: 'Образовательные материалы и методические пособия',
      icon: 'GraduationCap',
      stats: '100+ ресурсов'
    },
    {
      id: 'timeline',
      title: 'Хронология',
      description: 'Интерактивная временная шкала событий СВО',
      icon: 'Calendar',
      stats: '24 февраля 2022'
    },
    {
      id: 'immortal',
      title: 'Бессмертный полк СВО',
      description: 'Память о погибших героях специальной военной операции',
      icon: 'Heart',
      stats: 'Вечная память'
    }
  ];

  const statistics = [
    { label: 'Дней операции', value: '1000+', icon: 'Clock' },
    { label: 'Освобожденных городов', value: '50+', icon: 'MapPin' },
    { label: 'Героев России', value: '300+', icon: 'Medal' },
    { label: 'Спасенных жизней', value: '1000000+', icon: 'Users' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-patriotic-blue via-slate-50 to-patriotic-white">
      {/* Navigation */}
      <nav className="bg-patriotic-blue/90 backdrop-blur-sm text-white p-4 sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-patriotic-red rounded-full flex items-center justify-center">
              <Icon name="Shield" size={24} className="text-white" />
            </div>
            <h1 className="font-montserrat text-xl font-bold">Виртуальный музей СВО</h1>
          </div>
          <div className="hidden md:flex space-x-6">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="hover:text-patriotic-gold transition-colors duration-300"
              >
                {section.title}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <div className="animate-fade-in">
            <Badge className="mb-6 bg-patriotic-red text-white px-4 py-2 text-lg">
              🇷🇺 Память и Честь
            </Badge>
            <h1 className="font-montserrat text-5xl md:text-7xl font-bold text-patriotic-blue mb-6">
              Виртуальный музей СВО
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Интерактивная образовательная платформа, посвященная специальной военной операции. 
              Изучайте историю, знакомьтесь с героями, исследуйте документы и материалы.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                className="bg-patriotic-red hover:bg-patriotic-red/90 text-white px-8 py-4 text-lg font-semibold"
                size="lg"
              >
                <Icon name="PlayCircle" size={20} className="mr-2" />
                Начать экскурсию
              </Button>
              <Button 
                variant="outline" 
                className="border-patriotic-blue text-patriotic-blue hover:bg-patriotic-blue hover:text-white px-8 py-4 text-lg"
                size="lg"
              >
                <Icon name="Download" size={20} className="mr-2" />
                Скачать материалы
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-patriotic-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={stat.icon as any} size={28} className="text-patriotic-blue" />
                </div>
                <h3 className="font-montserrat text-2xl font-bold text-patriotic-blue mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-montserrat text-4xl font-bold text-patriotic-blue mb-4">
              Разделы музея
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Исследуйте различные аспекты специальной военной операции через интерактивные материалы и документы
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <Card 
                key={section.id} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-l-patriotic-red animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-12 h-12 bg-patriotic-red/10 rounded-lg flex items-center justify-center group-hover:bg-patriotic-red group-hover:text-white transition-colors duration-300">
                      <Icon name={section.icon as any} size={24} className="text-patriotic-red group-hover:text-white" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {section.stats}
                    </Badge>
                  </div>
                  <CardTitle className="font-montserrat text-xl text-patriotic-blue group-hover:text-patriotic-red transition-colors">
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {section.description}
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full border-patriotic-blue text-patriotic-blue hover:bg-patriotic-blue hover:text-white"
                  >
                    <Icon name="ArrowRight" size={16} className="mr-2" />
                    Перейти к разделу
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Timeline Preview */}
      <section className="py-20 bg-gradient-to-r from-patriotic-blue to-patriotic-red text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-montserrat text-4xl font-bold mb-6">
            Интерактивная хронология СВО
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
            Следите за ключевыми событиями специальной военной операции в интерактивном формате
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div className="text-left">
                <h3 className="font-montserrat text-2xl font-bold mb-2">24 февраля 2022</h3>
                <p className="opacity-80">Начало специальной военной операции</p>
              </div>
              <div className="w-16 h-16 bg-patriotic-gold rounded-full flex items-center justify-center">
                <Icon name="Calendar" size={32} className="text-patriotic-blue" />
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-white/5 rounded-lg p-4">
                <Icon name="MapPin" size={20} className="text-patriotic-gold mb-2" />
                <h4 className="font-semibold mb-1">География</h4>
                <p className="text-sm opacity-80">Основные направления операции</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <Icon name="Users" size={20} className="text-patriotic-gold mb-2" />
                <h4 className="font-semibold mb-1">Участники</h4>
                <p className="text-sm opacity-80">Военнослужащие и добровольцы</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <Icon name="Target" size={20} className="text-patriotic-gold mb-2" />
                <h4 className="font-semibold mb-1">Цели</h4>
                <p className="text-sm opacity-80">Защита мирного населения</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-patriotic-white">
        <div className="container mx-auto text-center">
          <h2 className="font-montserrat text-3xl font-bold text-patriotic-blue mb-6">
            Присоединяйтесь к изучению истории
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Станьте частью образовательного сообщества, изучающего современную историю России
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-patriotic-red hover:bg-patriotic-red/90 text-white px-8 py-3"
              size="lg"
            >
              <Icon name="Users" size={20} className="mr-2" />
              Присоединиться к сообществу
            </Button>
            <Button 
              variant="outline" 
              className="border-patriotic-blue text-patriotic-blue hover:bg-patriotic-blue hover:text-white px-8 py-3"
              size="lg"
            >
              <Icon name="Mail" size={20} className="mr-2" />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-patriotic-blue text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-patriotic-red rounded-full flex items-center justify-center">
              <Icon name="Shield" size={16} className="text-white" />
            </div>
            <span className="font-montserrat text-lg font-semibold">Виртуальный музей СВО</span>
          </div>
          <p className="opacity-80 mb-4">
            Образовательная платформа для изучения современной истории России
          </p>
          <p className="text-sm opacity-60">
            © 2024 Виртуальный музей СВО. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;