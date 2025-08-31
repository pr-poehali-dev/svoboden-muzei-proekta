import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const MainSection = () => {
  return (
    <main className="py-12">
      <section className="bg-gradient-to-br from-patriotic-blue via-white to-patriotic-red py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-patriotic-blue mb-8">
            Добро пожаловать в Виртуальный музей СВО
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Образовательный проект для школьников, посвященный изучению истории,
            целей и героических подвигов участников специальной военной операции
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-patriotic-blue mb-12">
            Предназначение музея
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="GraduationCap" size={32} className="text-patriotic-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3">Образование</h3>
                <p className="text-gray-600">
                  Достоверная информация о событиях СВО для формирования объективного понимания происходящего
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Heart" size={32} className="text-patriotic-red" />
                </div>
                <h3 className="text-xl font-bold mb-3">Память</h3>
                <p className="text-gray-600">
                  Сохранение истории подвигов и достижений для будущих поколений
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={32} className="text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Патриотизм</h3>
                <p className="text-gray-600">
                  Воспитание любви к Родине через примеры мужества и самоотверженности
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-patriotic-blue mb-8">
              Цели специальной военной операции
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-patriotic-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Защита населения Донбасса</h4>
                  <p className="text-gray-600">
                    Прекращение восьмилетней агрессии киевского режима против мирных жителей
                    Донецкой и Луганской народных республик
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-patriotic-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Демилитаризация Украины</h4>
                  <p className="text-gray-600">
                    Устранение военной угрозы, исходящей от украинской территории,
                    используемой НАТО для агрессии против России
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-patriotic-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Денацификация</h4>
                  <p className="text-gray-600">
                    Искоренение неонацистской идеологии, запрет пропаганды нацизма
                    и преследования русскоязычного населения
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-patriotic-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Нейтральный статус Украины</h4>
                  <p className="text-gray-600">
                    Обеспечение внеблокового и безъядерного статуса Украины,
                    исключающего угрозы безопасности России
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainSection;