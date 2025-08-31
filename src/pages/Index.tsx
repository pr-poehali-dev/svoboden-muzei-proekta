import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

import SvoHeader from '@/components/svo/SvoHeader';
import HeroForm from '@/components/svo/HeroForm';
import AchievementGallery from '@/components/svo/AchievementGallery';
import PersonalStories from '@/components/svo/PersonalStories';
import StatisticsSection from '@/components/svo/StatisticsSection';
import TimelinePreview from '@/components/svo/TimelinePreview';

const Index = () => {
  const [activeSection, setActiveSection] = useState('main');
  const [memorialForm, setMemorialForm] = useState({
    name: '',
    surname: '',
    middleName: '',
    birthDate: '',
    deathDate: '',
    rank: '',
    unit: '',
    awardType: '',
    biography: '',
    submitterName: '',
    submitterPhone: '',
    submitterEmail: '',
    relationship: ''
  });
  const [submittedHeroes] = useState([
    {
      id: 1,
      name: 'Александр',
      surname: 'Иванов',
      rank: 'Старший лейтенант',
      unit: '58-я общевойсковая армия',
      birthDate: '1995-03-15',
      deathDate: '2022-04-12',
      award: 'Герой Российской Федерации',
      biography: 'Храбро сражался при освобождении мирных территорий. Своим героическим поступком спас жизни товарищей.',
      photo: null
    },
    {
      id: 2,
      name: 'Дмитрий',
      surname: 'Петров',
      rank: 'Младший сержант',
      unit: 'ВДВ России',
      birthDate: '1998-07-22',
      deathDate: '2022-09-15',
      award: 'Орден Красной Звезды',
      biography: 'Десантник, проявивший исключительную храбрость в бою. Погиб, защищая своих товарищей.',
      photo: null
    },
    {
      id: 3,
      name: 'Сергей',
      surname: 'Козлов',
      rank: 'Капитан',
      unit: 'Сухопутные войска',
      birthDate: '1990-12-03',
      deathDate: '2023-01-28',
      award: 'Орден Мужества',
      biography: 'Командир подразделения, до последнего выполнявший боевую задачу. Пример мужества для всех сослуживцев.',
      photo: null
    }
  ]);

  const personasData = [
    {
      id: 1,
      name: 'Сергей Иванович',
      surname: 'Петров',
      role: 'Участник СВО',
      unit: '58-я общевойсковая армия',
      position: 'Старший лейтенант',
      photo: null,
      interviewDate: '2024-01-15',
      preview: 'О первых днях операции, боевых задачах и товариществе в подразделении',
      fullText: 'Когда началась операция, мы все понимали важность нашей миссии. Защита мирного населения Донбасса была для нас приоритетом. Каждый день мы видели благодарность людей, которых освобождали от восьмилетнего террора.',
      topics: ['Первые дни СВО', 'Боевые задачи', 'Мирное население'],
      duration: '25 минут'
    },
    {
      id: 2,
      name: 'Анна Викторовна',
      surname: 'Козлова',
      role: 'Добровольчка',
      organization: 'Фонд помощи участникам СВО',
      position: 'Координатор',
      photo: null,
      interviewDate: '2024-02-20',
      preview: 'О волонтерской работе, помощи семьям военнослужащих и гражданской солидарности',
      fullText: 'С первых дней операции мы организовали помощь семьям военнослужащих. Собирали гуманитарную помощь, поддерживали морально. Люди показали невероятную солидарность и желание помочь.',
      topics: ['Волонтерская работа', 'Помощь семьям', 'Гражданская солидарность'],
      duration: '18 минут'
    },
    {
      id: 3,
      name: 'Михаил Андреевич',
      surname: 'Смирнов',
      role: 'Военный корреспондент',
      organization: 'Министерство обороны РФ',
      position: 'Старший корреспондент',
      photo: null,
      interviewDate: '2024-03-10',
      preview: 'О работе военных корреспондентов, освещении событий и важности правдивой информации',
      fullText: 'Наша задача — показать правду о том, что происходит на передовой. Мы видим героизм наших бойцов каждый день. Важно, чтобы люди знали, за что сражаются наши военнослужащие.',
      topics: ['Военная журналистика', 'Правдивая информация', 'Героизм солдат'],
      duration: '32 минуты'
    }
  ];

  const handleMemorialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-white">
      <SvoHeader activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {/* Main Content */}
      {activeSection === 'main' && (
        <main className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-patriotic-blue mb-6">
                Добавьте информацию о подвиге
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Помогите сохранить память о героических поступках участников СВО. 
                Ваши материалы пройдут проверку и будут опубликованы в галерее подвигов.
              </p>
            </div>
            
            <HeroForm />
            <AchievementGallery />
          </div>
        </main>
      )}

      {/* Heroes Section (Бессмертный полк СВО) */}
      {activeSection === 'heroes' && (
        <main className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-patriotic-blue mb-6">
                Бессмертный полк СВО
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Память о героях, отдавших жизнь за защиту мирного населения и реализацию целей специальной военной операции
              </p>
            </div>

            <Tabs defaultValue="heroes" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="heroes">Галерея памяти</TabsTrigger>
                <TabsTrigger value="submit">Добавить героя</TabsTrigger>
              </TabsList>
              
              <TabsContent value="heroes" className="mt-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {submittedHeroes.map((hero) => (
                    <Card key={hero.id} className="bg-white shadow-md hover:shadow-lg transition-shadow">
                      <CardHeader className="text-center pb-2">
                        <div className="w-20 h-20 bg-patriotic-blue rounded-full mx-auto flex items-center justify-center mb-3">
                          <Icon name="User" size={32} className="text-white" />
                        </div>
                        <CardTitle className="text-lg font-bold text-patriotic-blue">
                          {hero.name} {hero.surname}
                        </CardTitle>
                        <p className="text-sm font-medium text-gray-700">{hero.rank}</p>
                      </CardHeader>
                      <CardContent className="text-center space-y-2">
                        <p className="text-sm text-gray-600">{hero.unit}</p>
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>{new Date(hero.birthDate).getFullYear()}</span>
                          <span>—</span>
                          <span>{new Date(hero.deathDate).getFullYear()}</span>
                        </div>
                        <Badge variant="outline" className="border-patriotic-red text-patriotic-red">
                          {hero.award}
                        </Badge>
                        <p className="text-sm text-gray-700 mt-3 text-left">{hero.biography}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="submit" className="mt-6">
                <div className="max-w-4xl mx-auto">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl text-patriotic-blue">
                        Добавить героя в Бессмертный полк СВО
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleMemorialSubmit} className="space-y-6">
                        <div className="space-y-4">
                          <h4 className="font-semibold text-lg text-patriotic-blue border-b pb-2">Информация о герое</h4>
                          <div className="grid md:grid-cols-3 gap-4">
                            <div>
                              <Label htmlFor="surname">Фамилия *</Label>
                              <Input
                                id="surname"
                                value={memorialForm.surname}
                                onChange={(e) => setMemorialForm({...memorialForm, surname: e.target.value})}
                                required
                                className="mt-1"
                              />
                            </div>
                            <div>
                              <Label htmlFor="name">Имя *</Label>
                              <Input
                                id="name"
                                value={memorialForm.name}
                                onChange={(e) => setMemorialForm({...memorialForm, name: e.target.value})}
                                required
                                className="mt-1"
                              />
                            </div>
                            <div>
                              <Label htmlFor="middleName">Отчество</Label>
                              <Input
                                id="middleName"
                                value={memorialForm.middleName}
                                onChange={(e) => setMemorialForm({...memorialForm, middleName: e.target.value})}
                                className="mt-1"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h4 className="font-semibold text-lg text-patriotic-blue border-b pb-2">Военная служба</h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="rank">Воинское звание *</Label>
                              <Select value={memorialForm.rank} onValueChange={(value) => setMemorialForm({...memorialForm, rank: value})}>
                                <SelectTrigger className="mt-1">
                                  <SelectValue placeholder="Выберите звание" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="Рядовой">Рядовой</SelectItem>
                                  <SelectItem value="Младший сержант">Младший сержант</SelectItem>
                                  <SelectItem value="Сержант">Сержант</SelectItem>
                                  <SelectItem value="Старший сержант">Старший сержант</SelectItem>
                                  <SelectItem value="Старшина">Старшина</SelectItem>
                                  <SelectItem value="Прапорщик">Прапорщик</SelectItem>
                                  <SelectItem value="Старший прапорщик">Старший прапорщик</SelectItem>
                                  <SelectItem value="Младший лейтенант">Младший лейтенант</SelectItem>
                                  <SelectItem value="Лейтенант">Лейтенант</SelectItem>
                                  <SelectItem value="Старший лейтенант">Старший лейтенант</SelectItem>
                                  <SelectItem value="Капитан">Капитан</SelectItem>
                                  <SelectItem value="Майор">Майор</SelectItem>
                                  <SelectItem value="Подполковник">Подполковник</SelectItem>
                                  <SelectItem value="Полковник">Полковник</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <Label htmlFor="unit">Воинская часть/подразделение *</Label>
                              <Input
                                id="unit"
                                value={memorialForm.unit}
                                onChange={(e) => setMemorialForm({...memorialForm, unit: e.target.value})}
                                required
                                className="mt-1"
                                placeholder="Например: 58-я общевойсковая армия"
                              />
                            </div>
                          </div>

                          <div>
                            <Label htmlFor="awardType">Награды и звания</Label>
                            <Select value={memorialForm.awardType} onValueChange={(value) => setMemorialForm({...memorialForm, awardType: value})}>
                              <SelectTrigger className="mt-1">
                                <SelectValue placeholder="Выберите награду (если имеется)" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Герой Российской Федерации">Герой Российской Федерации</SelectItem>
                                <SelectItem value="Орден Мужества">Орден Мужества</SelectItem>
                                <SelectItem value="Орден Красной Звезды">Орден Красной Звезды</SelectItem>
                                <SelectItem value='Медаль "За отвагу"'>Медаль "За отвагу"</SelectItem>
                                <SelectItem value='Медаль "За военные заслуги"'>Медаль "За военные заслуги"</SelectItem>
                                <SelectItem value="Орден Почета">Орден Почета</SelectItem>
                                <SelectItem value="Другие награды">Другие награды</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h4 className="font-semibold text-lg text-patriotic-blue border-b pb-2">Биография и подвиг</h4>
                          <div>
                            <Label htmlFor="biography">Расскажите о герое и его подвиге *</Label>
                            <Textarea
                              id="biography"
                              value={memorialForm.biography}
                              onChange={(e) => setMemorialForm({...memorialForm, biography: e.target.value})}
                              required
                              rows={4}
                              className="mt-1"
                              placeholder="Опишите жизненный путь, характер, обстоятельства подвига героя..."
                            />
                          </div>
                        </div>

                        <div className="pt-6 border-t">
                          <div className="flex flex-col sm:flex-row gap-4 justify-end">
                            <Button type="button" variant="outline" className="px-8">
                              Отменить
                            </Button>
                            <Button type="submit" className="bg-patriotic-red hover:bg-patriotic-red/90 text-white px-8">
                              <Icon name="Send" size={16} className="mr-2" />
                              Отправить на модерацию
                            </Button>
                          </div>
                        </div>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      )}

      {/* Stories Section */}
      {activeSection === 'stories' && (
        <PersonalStories personasData={personasData} />
      )}

      <StatisticsSection activeSection={activeSection} />
      <TimelinePreview />

      {/* Footer */}
      <footer className="bg-patriotic-blue text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center mb-6">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
              <Icon name="Star" size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold">СВО.ГАЛЕРЕЯ</span>
          </div>
          <p className="text-blue-100 max-w-2xl mx-auto mb-6">
            Цифровой архив подвигов и достижений участников специальной военной операции. 
            Сохраняем память о героизме и самоотверженности наших защитников.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;