import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import HeroicDeedForm from './HeroicDeedForm';

const HeroicGallery = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedDeed, setSelectedDeed] = useState<any>(null);

  const heroicDeeds = {
    combat: [
      {
        id: 1,
        title: 'Спасение раненых под огнём',
        participant: 'Александр Петров',
        rank: 'Старший сержант',
        date: '2023-03-15',
        location: 'Донецкая область',
        description: 'Под непрерывным артобстрелом вынес с поля боя 12 раненых товарищей',
        award: 'Орден Мужества',
        category: 'combat'
      },
      {
        id: 2,
        title: 'Уничтожение вражеской техники',
        participant: 'Михаил Иванов',
        rank: 'Младший лейтенант',
        date: '2023-05-20',
        location: 'Запорожская область',
        description: 'В одиночку уничтожил 3 единицы бронетехники противника',
        award: 'Медаль "За отвагу"',
        category: 'combat'
      }
    ],
    rear: [
      {
        id: 3,
        title: 'Организация гуманитарной помощи',
        participant: 'Елена Соколова',
        rank: 'Волонтёр',
        date: '2023-02-10',
        location: 'Ростовская область',
        description: 'Организовала сбор и доставку более 50 тонн гуманитарной помощи',
        award: 'Благодарность командования',
        category: 'rear'
      },
      {
        id: 4,
        title: 'Производство защитного снаряжения',
        participant: 'ООО "Броня"',
        rank: 'Предприятие',
        date: '2023-01-15',
        location: 'Челябинская область',
        description: 'Увеличили производство бронежилетов в 3 раза для нужд СВО',
        award: 'Государственная премия',
        category: 'rear'
      }
    ],
    science: [
      {
        id: 5,
        title: 'Разработка системы РЭБ',
        participant: 'КБ "Радиоэлектроника"',
        rank: 'Научный коллектив',
        date: '2023-04-01',
        location: 'Москва',
        description: 'Создана новая система радиоэлектронной борьбы для защиты от дронов',
        award: 'Премия Правительства РФ',
        category: 'science'
      }
    ],
    awards: [
      {
        id: 6,
        title: 'Герой Российской Федерации',
        participant: 'Владимир Жога',
        rank: 'Полковник',
        date: '2022-03-05',
        location: 'Мариуполь',
        description: 'Посмертно удостоен высшего звания за героизм и мужество',
        award: 'Герой Российской Федерации',
        category: 'awards'
      }
    ]
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'combat': return 'Shield';
      case 'rear': return 'Heart';
      case 'science': return 'Lightbulb';
      case 'awards': return 'Award';
      default: return 'Star';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'combat': return 'bg-red-100 text-red-800';
      case 'rear': return 'bg-blue-100 text-blue-800';
      case 'science': return 'bg-green-100 text-green-800';
      case 'awards': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleFormSubmit = (data: any) => {
    console.log('Форма отправлена:', data);
    setShowForm(false);
  };

  const DeedCard = ({ deed }: { deed: any }) => (
    <Card 
      className="hover:shadow-xl transition-shadow cursor-pointer"
      onClick={() => setSelectedDeed(deed)}
    >
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{deed.title}</CardTitle>
          <Icon name={getCategoryIcon(deed.category) as any} size={24} className="text-gray-400" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div>
            <p className="font-semibold text-patriotic-blue">{deed.participant}</p>
            <p className="text-sm text-gray-600">{deed.rank}</p>
          </div>
          <p className="text-gray-700 line-clamp-2">{deed.description}</p>
          <div className="flex justify-between items-center">
            <Badge className={getCategoryColor(deed.category)}>
              {deed.award}
            </Badge>
            <span className="text-sm text-gray-500">
              {new Date(deed.date).toLocaleDateString('ru-RU')}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  if (showForm) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <HeroicDeedForm 
            onSubmit={handleFormSubmit}
            onCancel={() => setShowForm(false)}
          />
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-patriotic-blue mb-4">
            Галерея подвигов СВО
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Истории мужества и самоотверженности участников специальной военной операции
          </p>
          <Button 
            onClick={() => setShowForm(true)}
            className="bg-patriotic-blue hover:bg-patriotic-blue/90"
          >
            <Icon name="Plus" size={20} className="mr-2" />
            Добавить подвиг
          </Button>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="all">Все подвиги</TabsTrigger>
            <TabsTrigger value="combat">Боевые</TabsTrigger>
            <TabsTrigger value="rear">Подвиги тыла</TabsTrigger>
            <TabsTrigger value="science">Научные</TabsTrigger>
            <TabsTrigger value="awards">Награды</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.values(heroicDeeds).flat().map((deed) => (
                <DeedCard key={deed.id} deed={deed} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="combat" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {heroicDeeds.combat.map((deed) => (
                <DeedCard key={deed.id} deed={deed} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="rear" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {heroicDeeds.rear.map((deed) => (
                <DeedCard key={deed.id} deed={deed} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="science" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {heroicDeeds.science.map((deed) => (
                <DeedCard key={deed.id} deed={deed} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="awards" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {heroicDeeds.awards.map((deed) => (
                <DeedCard key={deed.id} deed={deed} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {selectedDeed && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl">{selectedDeed.title}</CardTitle>
                    <Badge className={getCategoryColor(selectedDeed.category) + ' mt-2'}>
                      {selectedDeed.award}
                    </Badge>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedDeed(null)}
                  >
                    <Icon name="X" size={20} />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-lg text-patriotic-blue">
                      {selectedDeed.participant}
                    </h3>
                    <p className="text-gray-600">{selectedDeed.rank}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Дата:</span>
                      <p className="font-medium">
                        {new Date(selectedDeed.date).toLocaleDateString('ru-RU', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                    <div>
                      <span className="text-gray-500">Место:</span>
                      <p className="font-medium">{selectedDeed.location}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Описание подвига:</h4>
                    <p className="text-gray-700 leading-relaxed">
                      {selectedDeed.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroicGallery;