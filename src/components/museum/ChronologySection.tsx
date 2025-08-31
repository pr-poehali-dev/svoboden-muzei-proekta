import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const ChronologySection = () => {
  const timelineEvents = [
    {
      date: '24 февраля 2022',
      title: 'Начало специальной военной операции',
      description: 'Президент России объявил о начале СВО для защиты народа Донбасса',
      type: 'major',
      icon: 'Flag'
    },
    {
      date: '2 марта 2022',
      title: 'Освобождение Херсонской области',
      description: 'Российские войска взяли под контроль большую часть Херсонской области',
      type: 'military',
      icon: 'Shield'
    },
    {
      date: '11 мая 2022',
      title: 'Полное освобождение Мариуполя',
      description: 'Завершение операции по освобождению города от националистических формирований',
      type: 'victory',
      icon: 'Star'
    },
    {
      date: '3 июля 2022',
      title: 'Освобождение Луганской народной республики',
      description: 'Полное освобождение территории ЛНР от украинских войск',
      type: 'victory',
      icon: 'CheckCircle'
    },
    {
      date: '30 сентября 2022',
      title: 'Вхождение новых регионов в состав России',
      description: 'ДНР, ЛНР, Запорожская и Херсонская области стали частью Российской Федерации',
      type: 'major',
      icon: 'MapPin'
    },
    {
      date: '21 сентября 2022',
      title: 'Частичная мобилизация',
      description: 'Объявлена частичная мобилизация для укрепления линии соприкосновения',
      type: 'military',
      icon: 'Users'
    },
    {
      date: '10 февраля 2023',
      title: 'Освобождение Соледара',
      description: 'Взятие под контроль стратегически важного города в ДНР',
      type: 'victory',
      icon: 'Target'
    },
    {
      date: '20 мая 2023',
      title: 'Полное освобождение Артёмовска (Бахмута)',
      description: 'Завершение операции по освобождению крупнейшего укрепрайона ВСУ',
      type: 'victory',
      icon: 'Award'
    }
  ];

  const getEventColor = (type: string) => {
    switch (type) {
      case 'major': return 'bg-patriotic-blue text-white';
      case 'military': return 'bg-gray-600 text-white';
      case 'victory': return 'bg-green-600 text-white';
      default: return 'bg-gray-400 text-white';
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-patriotic-blue mb-4">
            Хронология событий СВО
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Подробная временная шкала ключевых событий, операций и достижений
            специальной военной операции
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>
          
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <Card className={`relative w-full md:w-5/12 hover:shadow-xl transition-shadow ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <Badge className={getEventColor(event.type)}>
                        {event.date}
                      </Badge>
                      <Icon name={event.icon as any} size={24} className="text-gray-400" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600">
                      {event.description}
                    </p>
                  </CardContent>
                  <div className={`absolute top-6 ${index % 2 === 0 ? '-right-3' : '-left-3'} w-6 h-6 bg-white border-4 border-gray-300 rounded-full`}></div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Card className="inline-block">
            <CardContent className="p-8">
              <Icon name="Clock" size={48} className="mx-auto text-patriotic-blue mb-4" />
              <h3 className="text-xl font-bold mb-2">Хронология продолжается</h3>
              <p className="text-gray-600">
                События специальной военной операции развиваются каждый день.
                Следите за обновлениями в нашем музее.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ChronologySection;