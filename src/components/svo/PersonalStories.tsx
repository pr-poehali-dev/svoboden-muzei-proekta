import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface PersonaData {
  id: number;
  name: string;
  surname: string;
  role: string;
  unit?: string;
  organization?: string;
  position: string;
  photo: string | null;
  interviewDate: string;
  preview: string;
  fullText: string;
  topics: string[];
  duration: string;
}

interface PersonalStoriesProps {
  personasData: PersonaData[];
}

const PersonalStories = ({ personasData }: PersonalStoriesProps) => {
  const [selectedPersona, setSelectedPersona] = useState<PersonaData | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-patriotic-blue mb-6">
            Личные истории участников
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Первоисточники информации — прямые свидетельства людей, принимающих участие в специальной военной операции
          </p>
        </div>

        <Tabs defaultValue="interviews" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="interviews">Интервью</TabsTrigger>
            <TabsTrigger value="archive">Архив историй</TabsTrigger>
          </TabsList>
          
          <TabsContent value="interviews" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {personasData.map((persona) => (
                <Card key={persona.id} className="hover:shadow-xl transition-shadow cursor-pointer" onClick={() => setSelectedPersona(persona)}>
                  <CardHeader className="text-center pb-4">
                    <div className="w-20 h-20 bg-patriotic-blue rounded-full mx-auto flex items-center justify-center mb-4">
                      <Icon name="User" size={32} className="text-white" />
                    </div>
                    <CardTitle className="text-lg text-patriotic-blue">
                      {persona.name} {persona.surname}
                    </CardTitle>
                    <Badge variant="outline" className="border-patriotic-blue text-patriotic-blue">
                      {persona.role}
                    </Badge>
                  </CardHeader>
                  <CardContent className="text-center space-y-3">
                    <p className="text-sm text-gray-600">
                      {persona.unit || persona.organization}
                    </p>
                    <p className="text-sm font-medium text-gray-700">{persona.position}</p>
                    <p className="text-sm text-gray-700 text-left">{persona.preview}</p>
                    <div className="flex justify-between items-center text-xs text-gray-500 pt-2">
                      <span>{new Date(persona.interviewDate).toLocaleDateString('ru-RU')}</span>
                      <span>{persona.duration}</span>
                    </div>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {persona.topics.slice(0, 2).map((topic, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                      {persona.topics.length > 2 && (
                        <Badge variant="secondary" className="text-xs">
                          +{persona.topics.length - 2}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button variant="outline" className="px-8">
                <Icon name="Plus" size={16} className="mr-2" />
                Загрузить ещё истории
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="archive" className="space-y-6">
            <div className="bg-blue-50 rounded-lg p-8 text-center">
              <Icon name="Archive" size={48} className="mx-auto text-patriotic-blue mb-4" />
              <h3 className="text-xl font-bold text-patriotic-blue mb-2">
                Архив историй в разработке
              </h3>
              <p className="text-gray-600 mb-6">
                Здесь будут собраны все материалы, документы и свидетельства участников СВО
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-white rounded-lg p-4">
                  <Icon name="FileText" size={24} className="mx-auto text-blue-600 mb-2" />
                  <div className="font-medium">Документы</div>
                  <div className="text-gray-500">Приказы, справки, отчёты</div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <Icon name="Camera" size={24} className="mx-auto text-blue-600 mb-2" />
                  <div className="font-medium">Фотоархив</div>
                  <div className="text-gray-500">Снимки операций и событий</div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <Icon name="Video" size={24} className="mx-auto text-blue-600 mb-2" />
                  <div className="font-medium">Видеоматериалы</div>
                  <div className="text-gray-500">Записи интервью и событий</div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Модальное окно для просмотра полного интервью */}
        {selectedPersona && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-patriotic-blue">
                      {selectedPersona.name} {selectedPersona.surname}
                    </h3>
                    <p className="text-lg text-gray-600">{selectedPersona.role}</p>
                    <p className="text-sm text-gray-500">
                      {selectedPersona.unit || selectedPersona.organization} • {selectedPersona.position}
                    </p>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setSelectedPersona(null)}
                  >
                    <Icon name="X" size={20} />
                  </Button>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Темы интервью:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedPersona.topics.map((topic, index) => (
                        <Badge key={index} variant="outline">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Полный текст интервью:</h4>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {selectedPersona.fullText}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm text-gray-500 pt-4 border-t">
                    <span>Дата интервью: {new Date(selectedPersona.interviewDate).toLocaleDateString('ru-RU')}</span>
                    <span>Продолжительность: {selectedPersona.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PersonalStories;