import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const TimelinePreview = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-patriotic-blue to-patriotic-red text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">
            Интерактивная хронология СВО
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Подробная временная шкала ключевых событий, операций и достижений специальной военной операции
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Calendar" size={32} className="text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">Хронология событий</h3>
                <p className="text-sm opacity-80">
                  Точные даты и временные рамки всех ключевых операций
                </p>
              </div>
              <div>
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={32} className="text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">География операций</h3>
                <p className="text-sm opacity-80">
                  Карты и локации проведённых военных действий
                </p>
              </div>
              <div>
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">Участники событий</h3>
                <p className="text-sm opacity-80">
                  Истории и свидетельства непосредственных участников
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-4">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              <span className="text-lg">Запуск интерактивной хронологии</span>
            </div>
            <p className="text-sm opacity-70">
              Функционал находится в разработке. Скоро будет доступна полная временная шкала событий СВО
            </p>
          </div>
          
          <div className="mt-8">
            <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              <Icon name="Play" size={16} className="mr-2" />
              Предварительный просмотр
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelinePreview;