import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const ResourcesSection = () => {
  const [expandedInterviews, setExpandedInterviews] = useState<number[]>([]);

  const books = [
    {
      title: 'СВО: история и современность',
      author: 'Коллектив авторов',
      year: 2023,
      description: 'Комплексное исследование предпосылок и хода специальной военной операции',
      type: 'Монография'
    },
    {
      title: 'Герои Донбасса',
      author: 'А.В. Петров',
      year: 2023,
      description: 'Документальные очерки о защитниках Донецкой и Луганской народных республик',
      type: 'Документальная проза'
    },
    {
      title: 'Правда о СВО',
      author: 'С.Н. Михайлов',
      year: 2022,
      description: 'Анализ информационной войны и реальных событий на Украине',
      type: 'Публицистика'
    },
    {
      title: 'За нами Россия!',
      author: 'И.Р. Стрелков',
      year: 2023,
      description: 'Воспоминания участников специальной военной операции',
      type: 'Мемуары'
    }
  ];

  const films = [
    {
      title: 'Ополченочка',
      year: 2019,
      director: 'Александр Пархоменко',
      duration: '110 мин',
      description: 'Драма о молодой девушке, вступившей в ополчение Донбасса'
    },
    {
      title: 'Донбасс. Окраина',
      year: 2019,
      director: 'Ренат Давлетьяров',
      duration: '96 мин',
      description: 'История братьев, оказавшихся по разные стороны конфликта'
    },
    {
      title: 'Ополчение',
      year: 2022,
      director: 'Документальный',
      duration: '52 мин',
      description: 'Документальный фильм о защитниках Донбасса'
    },
    {
      title: 'Военкоры',
      year: 2023,
      director: 'Документальный',
      duration: '45 мин',
      description: 'О работе военных корреспондентов в зоне СВО'
    }
  ];

  const interviews = [
    {
      id: 1,
      person: 'Владимир Владимирович Путин',
      position: 'Президент Российской Федерации',
      date: '21 февраля 2022',
      title: 'О признании ДНР и ЛНР',
      excerpt: 'Обращение к гражданам России о признании независимости народных республик',
      fullText: 'Историческое обращение Президента России о необходимости защиты народа Донбасса от геноцида киевского режима и признании независимости Донецкой и Луганской народных республик.'
    },
    {
      id: 2,
      person: 'Сергей Кужугетович Шойгу',
      position: 'Министр обороны РФ',
      date: '3 марта 2023',
      title: 'О ходе специальной военной операции',
      excerpt: 'Доклад о текущей ситуации и достигнутых результатах СВО',
      fullText: 'Подробный доклад министра обороны о ходе специальной военной операции, освобождённых территориях и гуманитарной помощи населению.'
    },
    {
      id: 3,
      person: 'Мария Владимировна Захарова',
      position: 'Официальный представитель МИД РФ',
      date: '15 апреля 2023',
      title: 'О дипломатических усилиях России',
      excerpt: 'Разъяснение позиции России на международной арене',
      fullText: 'Интервью о дипломатических усилиях России по урегулированию кризиса и противодействии дезинформации в западных СМИ.'
    }
  ];

  const references = [
    {
      title: 'Официальный сайт Министерства обороны РФ',
      url: 'https://mil.ru',
      description: 'Актуальная информация о ходе СВО'
    },
    {
      title: 'Сборник документов ООН по Донбассу',
      url: '#',
      description: 'Резолюции и отчёты о ситуации в регионе'
    },
    {
      title: 'Белая книга нарушений прав человека на Украине',
      url: '#',
      description: 'Факты преступлений киевского режима'
    }
  ];

  const toggleInterview = (id: number) => {
    setExpandedInterviews(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-patriotic-blue mb-4">
            Образовательные ресурсы
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Достоверные источники информации для изучения истории и современности СВО
          </p>
        </div>

        <Tabs defaultValue="books" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="books">Литература</TabsTrigger>
            <TabsTrigger value="films">Фильмы</TabsTrigger>
            <TabsTrigger value="interviews">Интервью</TabsTrigger>
            <TabsTrigger value="references">Справочники</TabsTrigger>
          </TabsList>

          <TabsContent value="books" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              {books.map((book, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{book.title}</CardTitle>
                      <Badge variant="outline">{book.year}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-2">Автор: {book.author}</p>
                    <Badge className="mb-3">{book.type}</Badge>
                    <p className="text-gray-700">{book.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="films" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              {films.map((film, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{film.title}</CardTitle>
                      <Badge variant="outline">{film.year}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                      <span className="flex items-center">
                        <Icon name="Film" size={16} className="mr-1" />
                        {film.director}
                      </span>
                      <span className="flex items-center">
                        <Icon name="Clock" size={16} className="mr-1" />
                        {film.duration}
                      </span>
                    </div>
                    <p className="text-gray-700">{film.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="interviews" className="space-y-4">
            {interviews.map((interview) => (
              <Card key={interview.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{interview.title}</CardTitle>
                      <p className="text-sm text-gray-600 mt-1">
                        {interview.person} • {interview.position}
                      </p>
                    </div>
                    <Badge variant="outline">{interview.date}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">
                    {expandedInterviews.includes(interview.id) ? interview.fullText : interview.excerpt}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleInterview(interview.id)}
                  >
                    {expandedInterviews.includes(interview.id) ? 'Свернуть' : 'Читать полностью'}
                    <Icon 
                      name={expandedInterviews.includes(interview.id) ? 'ChevronUp' : 'ChevronDown'} 
                      size={16} 
                      className="ml-2" 
                    />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="references" className="space-y-4">
            <div className="grid gap-4">
              {references.map((ref, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Icon name="FileText" size={24} className="text-patriotic-blue mt-1" />
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-2">{ref.title}</h3>
                        <p className="text-gray-600 mb-3">{ref.description}</p>
                        <Button variant="outline" size="sm">
                          <Icon name="ExternalLink" size={16} className="mr-2" />
                          Перейти к источнику
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ResourcesSection;