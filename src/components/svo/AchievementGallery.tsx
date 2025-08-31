import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const AchievementGallery = () => {
  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold text-patriotic-blue text-center mb-8">
        Примеры подвигов в галерее
      </h3>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Combat Achievement */}
        <Card className="hover:shadow-xl transition-shadow bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardHeader>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                <Icon name="Zap" size={24} className="text-white" />
              </div>
              <div>
                <Badge className="bg-green-600 text-white mb-2">Боевой подвиг</Badge>
                <CardTitle className="text-lg text-green-800">Операция "Прорыв"</CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-green-700 mb-4">
              Успешное освобождение населённого пункта силами разведгруппы под командованием капитана Петрова А.И.
            </p>
            <div className="space-y-2 text-xs text-green-600">
              <div className="flex justify-between">
                <span>Дата:</span>
                <span>15 марта 2023</span>
              </div>
              <div className="flex justify-between">
                <span>Награда:</span>
                <span>Орден Мужества</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Civilian Achievement */}
        <Card className="hover:shadow-xl transition-shadow bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardHeader>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                <Icon name="Users" size={24} className="text-white" />
              </div>
              <div>
                <Badge className="bg-blue-600 text-white mb-2">Подвиг тыла</Badge>
                <CardTitle className="text-lg text-blue-800">Гуманитарная помощь</CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-blue-700 mb-4">
              Организация доставки жизненно необходимых товаров в освобождённые районы Донбасса
            </p>
            <div className="space-y-2 text-xs text-blue-600">
              <div className="flex justify-between">
                <span>Дата:</span>
                <span>Постоянно</span>
              </div>
              <div className="flex justify-between">
                <span>Статус:</span>
                <span>Активно</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Scientific Achievement */}
        <Card className="hover:shadow-xl transition-shadow bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardHeader>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                <Icon name="Lightbulb" size={24} className="text-white" />
              </div>
              <div>
                <Badge className="bg-purple-600 text-white mb-2">Научное достижение</Badge>
                <CardTitle className="text-lg text-purple-800">Система РЭБ</CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-purple-700 mb-4">
              Разработка системы радиоэлектронной борьбы для защиты от беспилотных летательных аппаратов
            </p>
            <div className="space-y-2 text-xs text-purple-600">
              <div className="flex justify-between">
                <span>Область:</span>
                <span>РЭБ</span>
              </div>
              <div className="flex justify-between">
                <span>Статус:</span>
                <span>Внедрено</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Award Achievement */}
        <Card className="hover:shadow-xl transition-shadow bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
          <CardHeader>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mr-4">
                <Icon name="Medal" size={24} className="text-white" />
              </div>
              <div>
                <Badge className="bg-orange-600 text-white mb-2">Награждение</Badge>
                <CardTitle className="text-lg text-orange-800">Герои России</CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-orange-700 mb-4">
              Массовое награждение участников операции за проявленное мужество и героизм
            </p>
            <div className="space-y-2 text-xs text-orange-600">
              <div className="flex justify-between">
                <span>Награждено:</span>
                <span>156 человек</span>
              </div>
              <div className="flex justify-between">
                <span>Награда:</span>
                <span>Различные</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Medical Achievement */}
        <Card className="hover:shadow-xl transition-shadow bg-gradient-to-br from-red-50 to-pink-100 border-red-200">
          <CardHeader>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-4">
                <Icon name="Heart" size={24} className="text-white" />
              </div>
              <div>
                <Badge className="bg-red-600 text-white mb-2">Медицинская помощь</Badge>
                <CardTitle className="text-lg text-red-800">Спасение жизней</CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-red-700 mb-4">
              Организация полевых медицинских центров для оказания помощи раненым и мирному населению
            </p>
            <div className="space-y-2 text-xs text-red-600">
              <div className="flex justify-between">
                <span>Спасено:</span>
                <span>2847 человек</span>
              </div>
              <div className="flex justify-between">
                <span>Статус:</span>
                <span>Продолжается</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Engineering Achievement */}
        <Card className="hover:shadow-xl transition-shadow bg-gradient-to-br from-gray-50 to-slate-100 border-gray-200">
          <CardHeader>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center mr-4">
                <Icon name="Wrench" size={24} className="text-white" />
              </div>
              <div>
                <Badge className="bg-gray-600 text-white mb-2">Инженерный подвиг</Badge>
                <CardTitle className="text-lg text-gray-800">Восстановление инфраструктуры</CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-700 mb-4">
              Быстрое восстановление дорог, мостов и коммуникаций в освобождённых территориях
            </p>
            <div className="space-y-2 text-xs text-gray-600">
              <div className="flex justify-between">
                <span>Объекты:</span>
                <span>47 мостов</span>
              </div>
              <div className="flex justify-between">
                <span>Дороги:</span>
                <span>890 км</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AchievementGallery;