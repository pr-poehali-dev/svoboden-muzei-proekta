import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const StatisticsSection = ({ activeSection }: { activeSection: string }) => {
  return (
    <>
      {activeSection === 'achievements' && (
        <section className="py-16 bg-gradient-to-r from-patriotic-blue to-patriotic-red text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Статистика результатов СВО
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-green-600 mb-2">2,847</div>
                  <div className="text-sm text-gray-600">Освобождённых населённых пунктов</div>
                  <p className="text-xs text-gray-500 mt-2">Обеспечение безопасности мирного населения Донбасса и других регионов</p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-blue-600 mb-2">156,392</div>
                  <div className="text-sm text-gray-600">Спасённых мирных жителей</div>
                  <p className="text-xs text-gray-500 mt-2">Эвакуация и помощь населению в зонах боевых действий</p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-purple-600 mb-2">47</div>
                  <div className="text-sm text-gray-600">Восстановленных объектов инфраструктуры</div>
                  <p className="text-xs text-gray-500 mt-2">Мосты, дороги, школы, больницы в освобождённых территориях</p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-orange-600 mb-2">892</div>
                  <div className="text-sm text-gray-600">Наград вручено</div>
                  <p className="text-xs text-gray-500 mt-2">Государственные награды за героизм и выполнение воинского долга</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default StatisticsSection;