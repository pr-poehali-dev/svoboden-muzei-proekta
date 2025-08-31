import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

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
  const [memorialPhotos, setMemorialPhotos] = useState<File[]>([]);
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
      name: 'Владимир Александрович',
      surname: 'Смирнов',
      role: 'Политический деятель',
      organization: 'Государственная Дума РФ',
      position: 'Депутат, член комитета по обороне',
      photo: null,
      interviewDate: '2024-03-10',
      preview: 'О политических предпосылках СВО, международной обстановке и целях операции',
      fullText: 'Решение о проведении специальной военной операции было вынужденным. Восемь лет мы пытались решить проблему дипломатическим путем, но киевский режим не выполнял Минские соглашения.',
      topics: ['Политические предпосылки', 'Дипломатия', 'Минские соглашения'],
      duration: '32 минуты'
    },
    {
      id: 4,
      name: 'Елена Сергеевна',
      surname: 'Морозова',
      role: 'Историк',
      organization: 'МГУ им. М.В. Ломоносова',
      position: 'Доктор исторических наук',
      photo: null,
      interviewDate: '2024-03-25',
      preview: 'Об исторических корнях конфликта, роли Украины в советской истории и современном контексте',
      fullText: 'Чтобы понять происходящее сегодня, нужно обратиться к истории. Украина всегда была частью русского мира, и попытки разорвать эти связи имели трагические последствия.',
      topics: ['Исторические корни', 'Русский мир', 'Советская история'],
      duration: '28 минут'
    },
    {
      id: 5,
      name: 'Дмитрий Николаевич',
      surname: 'Волков',
      role: 'Военный корреспондент',
      organization: 'РИА Новости',
      position: 'Специальный корреспондент',
      photo: null,
      interviewDate: '2024-04-05',
      preview: 'О работе в зоне СВО, освещении событий и важности правдивой информации',
      fullText: 'Быть военкором в зоне СВО — большая ответственность. Важно показать правду о происходящем, рассказать о героизме наших бойцов и помочь людям понять суть событий.',
      topics: ['Военная журналистика', 'Освещение СВО', 'Информационная война'],
      duration: '22 минуты'
    }
  ];

  const handleMemorialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за предоставленную информацию. Данные переданы на модерацию.');
    setMemorialForm({
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
    setMemorialPhotos([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-red-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-patriotic-blue rounded-full flex items-center justify-center">
                <Icon name="Shield" size={20} className="text-white" />
              </div>
              <h1 className="font-montserrat text-xl font-bold text-patriotic-blue">Виртуальный музей СВО</h1>
            </div>
            
            <nav className="hidden md:flex space-x-6">
              <button
                onClick={() => setActiveSection('main')}
                className={`px-3 py-2 rounded-lg transition-colors ${
                  activeSection === 'main' 
                    ? 'bg-patriotic-blue text-white' 
                    : 'text-gray-600 hover:text-patriotic-blue'
                }`}
              >
                Главная
              </button>
              <button
                onClick={() => setActiveSection('timeline')}
                className={`px-3 py-2 rounded-lg transition-colors ${
                  activeSection === 'timeline' 
                    ? 'bg-patriotic-blue text-white' 
                    : 'text-gray-600 hover:text-patriotic-blue'
                }`}
              >
                Хронология
              </button>
              <button
                onClick={() => setActiveSection('personas')}
                className={`px-3 py-2 rounded-lg transition-colors ${
                  activeSection === 'personas' 
                    ? 'bg-patriotic-blue text-white' 
                    : 'text-gray-600 hover:text-patriotic-blue'
                }`}
              >
                Персоналии
              </button>
              <button
                onClick={() => setActiveSection('resources')}
                className={`px-3 py-2 rounded-lg transition-colors ${
                  activeSection === 'resources' 
                    ? 'bg-patriotic-blue text-white' 
                    : 'text-gray-600 hover:text-patriotic-blue'
                }`}
              >
                Ресурсы
              </button>
              <button
                onClick={() => setActiveSection('memorial')}
                className={`px-3 py-2 rounded-lg transition-colors ${
                  activeSection === 'memorial' 
                    ? 'bg-patriotic-red text-white' 
                    : 'text-gray-600 hover:text-patriotic-red'
                }`}
              >
                Бессмертный полк СВО
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      {activeSection === 'main' && (
        <section className="relative py-16 bg-gradient-to-r from-patriotic-blue to-patriotic-red text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Icon name="Shield" size={24} className="text-white" />
            </div>
            <h1 className="font-montserrat text-5xl font-bold">Виртуальный музей СВО</h1>
          </div>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Изучайте современную историю России через документы, хронологию событий и истории героев
          </p>
        </div>
      </section>
      )}

      {/* Main Section - Цели СВО */}
      {activeSection === 'main' && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-montserrat text-4xl font-bold text-patriotic-blue mb-6">
                Цели специальной военной операции
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
                Специальная военная операция проводится для защиты мирного населения и обеспечения безопасности России
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-patriotic-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Shield" size={32} className="text-white" />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-patriotic-blue">Денацификация</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Освобождение территорий от неонацистских формирований и идеологии</p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-patriotic-red rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Users" size={32} className="text-white" />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-patriotic-blue">Демилитаризация</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Нейтрализация военной угрозы и разоружение опасных формирований</p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-patriotic-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Heart" size={32} className="text-white" />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-patriotic-blue">Защита населения</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Обеспечение безопасности мирного населения Донбасса и других регионов</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Statistics Section */}
      <section className="py-12 bg-white/80">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-patriotic-blue mb-2">891</div>
              <div className="text-sm text-gray-600">Героев в галерее</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-patriotic-red mb-2">47</div>
              <div className="text-sm text-gray-600">Памятных мест</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-patriotic-blue mb-2">156</div>
              <div className="text-sm text-gray-600">Документов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-patriotic-red mb-2">23</div>
              <div className="text-sm text-gray-600">Регионов</div>
            </div>
          </div>
        </div>
      </section>

      {/* Personas Section */}
      {activeSection === 'personas' && (
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-montserrat text-4xl font-bold text-patriotic-blue mb-6">
                Персоналии СВО
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Интервью с участниками специальной военной операции, добровольцами, 
                политиками и историками, рассказывающими о событиях из первых рук
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {personasData.map((persona) => (
                <Card key={persona.id} className="hover:shadow-xl transition-all duration-300 cursor-pointer bg-white">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-patriotic-blue to-patriotic-red rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name="User" size={28} className="text-white" />
                      </div>
                      <div className="text-right flex-1 ml-4">
                        <Badge 
                          className={`text-xs mb-2 ${
                            persona.role === 'Участник СВО' ? 'bg-patriotic-red text-white' :
                            persona.role === 'Добровольчка' ? 'bg-green-500 text-white' :
                            persona.role === 'Политический деятель' ? 'bg-patriotic-blue text-white' :
                            persona.role === 'Историк' ? 'bg-purple-500 text-white' :
                            'bg-orange-500 text-white'
                          }`}
                        >
                          {persona.role}
                        </Badge>
                        <p className="text-xs text-gray-500">
                          {new Date(persona.interviewDate).toLocaleDateString('ru-RU', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric'
                          })}
                        </p>
                      </div>
                    </div>
                    
                    <CardTitle className="text-xl font-bold text-patriotic-blue mb-2">
                      {persona.name} {persona.surname}
                    </CardTitle>
                    <p className="text-sm font-medium text-gray-700 mb-1">{persona.position}</p>
                    <p className="text-xs text-gray-500">
                      {persona.organization || persona.unit}
                    </p>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span className="flex items-center">
                        <Icon name="Clock" size={14} className="mr-1" />
                        {persona.duration}
                      </span>
                      <span className="flex items-center">
                        <Icon name="MessageSquare" size={14} className="mr-1" />
                        Интервью
                      </span>
                    </div>

                    <div className="border-t pt-4">
                      <p className="text-sm text-gray-700 leading-relaxed mb-4">
                        {persona.preview}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {persona.topics.slice(0, 3).map((topic, index) => (
                          <Badge key={index} variant="outline" className="text-xs border-patriotic-blue text-patriotic-blue">
                            {topic}
                          </Badge>
                        ))}
                      </div>

                      <Button 
                        className="w-full bg-patriotic-blue hover:bg-patriotic-blue/90 text-white"
                        size="sm"
                      >
                        <Icon name="Play" size={16} className="mr-2" />
                        Читать интервью
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 bg-white rounded-2xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-patriotic-blue mb-4">
                  Статистика интервью
                </h3>
                <p className="text-gray-600">
                  Собираем свидетельства участников исторических событий
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-patriotic-red mb-2">2</div>
                  <div className="text-sm text-gray-600">Участников СВО</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">1</div>
                  <div className="text-sm text-gray-600">Добровольцев</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-patriotic-blue mb-2">1</div>
                  <div className="text-sm text-gray-600">Политиков</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-2">1</div>
                  <div className="text-sm text-gray-600">Историков</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600 mb-2">1</div>
                  <div className="text-sm text-gray-600">Журналистов</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Gallery of Feats Section */}
      {activeSection === 'memorial' && (
        <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-montserrat text-4xl font-bold text-patriotic-blue mb-4 flex items-center justify-center">
              <Icon name="Award" size={32} className="text-yellow-600 mr-3" />
              Галерея подвигов СВО
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Подвиги участников передовой и тыла, достижения науки и техники, медали и награды — 
              всё, что способствует достижению целей специальной военной операции.
            </p>
          </div>

          {/* Achievement Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow bg-gradient-to-b from-green-50 to-green-100 border-green-200">
              <Icon name="Zap" size={40} className="mx-auto mb-4 text-green-600" />
              <h3 className="font-bold text-lg mb-2 text-green-800">Боевые подвиги</h3>
              <p className="text-sm text-green-700">Героические действия на передовой</p>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow bg-gradient-to-b from-blue-50 to-blue-100 border-blue-200">
              <Icon name="Users" size={40} className="mx-auto mb-4 text-blue-600" />
              <h3 className="font-bold text-lg mb-2 text-blue-800">Подвиги тыла</h3>
              <p className="text-sm text-blue-700">Вклад работников тыла и волонтёров</p>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow bg-gradient-to-b from-purple-50 to-purple-100 border-purple-200">
              <Icon name="Lightbulb" size={40} className="mx-auto mb-4 text-purple-600" />
              <h3 className="font-bold text-lg mb-2 text-purple-800">Научные достижения</h3>
              <p className="text-sm text-purple-700">Разработки и открытия для СВО</p>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow bg-gradient-to-b from-orange-50 to-orange-100 border-orange-200">
              <Icon name="Medal" size={40} className="mx-auto mb-4 text-orange-600" />
              <h3 className="font-bold text-lg mb-2 text-orange-800">Награды и медали</h3>
              <p className="text-sm text-orange-700">Государственные и ведомственные награды</p>
            </Card>
          </div>

          {/* Add Achievement Dialog */}
          <div className="flex justify-center mb-8">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-patriotic-blue hover:bg-patriotic-blue/90 text-white px-8 py-4 text-lg">
                  <Icon name="Plus" size={20} className="mr-2" />
                  Добавить информацию о подвиге
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-5xl max-h-[85vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl text-patriotic-blue flex items-center">
                    <Icon name="Award" size={24} className="text-yellow-600 mr-2" />
                    Добавить информацию в Галерею подвигов СВО
                  </DialogTitle>
                  <DialogDescription className="text-gray-600 mt-2">
                    Расскажите о подвиге, достижении или вкладе в реализацию целей СВО
                  </DialogDescription>
                </DialogHeader>
                
                <div className="mt-6">
                  {/* Achievement Type Selection */}
                  <div className="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-lg p-6 mb-6">
                    <h4 className="font-bold text-patriotic-blue mb-4 text-lg flex items-center">
                      <Icon name="Target" size={20} className="mr-2" />
                      Выберите категорию подвига
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <label className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-white/60 transition-colors">
                        <input type="radio" name="achievementType" value="combat" className="mr-3" />
                        <div className="flex items-center">
                          <Icon name="Zap" size={20} className="text-green-600 mr-3" />
                          <div>
                            <div className="font-semibold text-green-800">Боевой подвиг</div>
                            <div className="text-sm text-green-700">Героические действия на передовой</div>
                          </div>
                        </div>
                      </label>
                      
                      <label className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-white/60 transition-colors">
                        <input type="radio" name="achievementType" value="civilian" className="mr-3" />
                        <div className="flex items-center">
                          <Icon name="Users" size={20} className="text-blue-600 mr-3" />
                          <div>
                            <div className="font-semibold text-blue-800">Подвиг тыла</div>
                            <div className="text-sm text-blue-700">Вклад работников тыла, волонтёров</div>
                          </div>
                        </div>
                      </label>
                      
                      <label className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-white/60 transition-colors">
                        <input type="radio" name="achievementType" value="scientific" className="mr-3" />
                        <div className="flex items-center">
                          <Icon name="Lightbulb" size={20} className="text-purple-600 mr-3" />
                          <div>
                            <div className="font-semibold text-purple-800">Научное достижение</div>
                            <div className="text-sm text-purple-700">Разработки, открытия, изобретения</div>
                          </div>
                        </div>
                      </label>
                      
                      <label className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-white/60 transition-colors">
                        <input type="radio" name="achievementType" value="award" className="mr-3" />
                        <div className="flex items-center">
                          <Icon name="Medal" size={20} className="text-orange-600 mr-3" />
                          <div>
                            <div className="font-semibold text-orange-800">Награда/медаль</div>
                            <div className="text-sm text-orange-700">Государственные, ведомственные награды</div>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4 mb-6">
                    <div className="flex items-start space-x-3">
                      <Icon name="Info" size={20} className="text-patriotic-blue mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-patriotic-blue mb-2">О процессе модерации</h4>
                        <p className="text-sm text-gray-700">
                          Все материалы проходят проверку для обеспечения достоверности информации. 
                          Публикация производится только после подтверждения фактов.
                        </p>
                      </div>
                    </div>
                  </div>

                  <form className="space-y-8">
                    {/* Basic Information */}
                    <div className="space-y-6">
                      <h4 className="font-semibold text-lg text-patriotic-blue border-b pb-2 flex items-center">
                        <Icon name="FileText" size={20} className="mr-2" />
                        Основная информация
                      </h4>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="achievementTitle">Название подвига/достижения *</Label>
                          <Input
                            id="achievementTitle"
                            placeholder="Краткое название подвига или достижения"
                            className="mt-1"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="achievementDate">Дата совершения</Label>
                          <Input
                            id="achievementDate"
                            type="date"
                            className="mt-1"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="achievementDescription">Подробное описание *</Label>
                        <Textarea
                          id="achievementDescription"
                          rows={4}
                          placeholder="Подробно опишите подвиг, достижение или вклад в реализацию целей СВО..."
                          className="mt-1"
                          required
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          Минимум 150 символов. Указывайте только проверенную информацию.
                        </p>
                      </div>
                    </div>

                    {/* Person/Organization Information */}
                    <div className="space-y-6">
                      <h4 className="font-semibold text-lg text-patriotic-blue border-b pb-2 flex items-center">
                        <Icon name="User" size={20} className="mr-2" />
                        Информация об участнике
                      </h4>
                      
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="participantSurname">Фамилия *</Label>
                          <Input
                            id="participantSurname"
                            placeholder="Иванов"
                            className="mt-1"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="participantName">Имя *</Label>
                          <Input
                            id="participantName"
                            placeholder="Иван"
                            className="mt-1"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="participantMiddleName">Отчество</Label>
                          <Input
                            id="participantMiddleName"
                            placeholder="Иванович"
                            className="mt-1"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="participantRank">Звание/должность</Label>
                          <Input
                            id="participantRank"
                            placeholder="Старший лейтенант, инженер, волонтёр и т.д."
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="participantUnit">Подразделение/организация</Label>
                          <Input
                            id="participantUnit"
                            placeholder="Воинская часть, предприятие, НИИ и т.д."
                            className="mt-1"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Award/Recognition Information */}
                    <div className="space-y-6">
                      <h4 className="font-semibold text-lg text-patriotic-blue border-b pb-2 flex items-center">
                        <Icon name="Award" size={20} className="mr-2" />
                        Награды и признание
                      </h4>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="awardName">Название награды</Label>
                          <Input
                            id="awardName"
                            placeholder="Орден Мужества, медаль 'За отвагу' и т.д."
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="awardDate">Дата награждения</Label>
                          <Input
                            id="awardDate"
                            type="date"
                            className="mt-1"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="awardReason">Основание для награждения</Label>
                        <Textarea
                          id="awardReason"
                          rows={3}
                          placeholder="За что именно была вручена награда..."
                          className="mt-1"
                        />
                      </div>
                    </div>

                    {/* Technical/Scientific Details (conditional) */}
                    <div className="space-y-6">
                      <h4 className="font-semibold text-lg text-patriotic-blue border-b pb-2 flex items-center">
                        <Icon name="Settings" size={20} className="mr-2" />
                        Технические детали (для научных достижений)
                      </h4>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="technicalField">Область науки/техники</Label>
                          <Input
                            id="technicalField"
                            placeholder="Радиоэлектроника, медицина, материаловедение и т.д."
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="applicationArea">Сфера применения</Label>
                          <Input
                            id="applicationArea"
                            placeholder="Военная техника, медицинское оборудование и т.д."
                            className="mt-1"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="technicalDescription">Техническое описание</Label>
                        <Textarea
                          id="technicalDescription"
                          rows={3}
                          placeholder="Описание технических особенностей, принципа действия..."
                          className="mt-1"
                        />
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-6">
                      <h4 className="font-semibold text-lg text-patriotic-blue border-b pb-2 flex items-center">
                        <Icon name="Phone" size={20} className="mr-2" />
                        Контактная информация
                      </h4>
                      
                      <div className="bg-blue-50 rounded-lg p-4 mb-4">
                        <p className="text-sm text-gray-700">
                          <Icon name="Lock" size={16} className="inline mr-1" />
                          Ваши контактные данные не публикуются и используются только для связи с модераторами.
                        </p>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="submitterName">Ваше имя *</Label>
                          <Input
                            id="submitterName"
                            placeholder="Фамилия Имя Отчество"
                            className="mt-1"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="submitterPhone">Телефон *</Label>
                          <Input
                            id="submitterPhone"
                            type="tel"
                            placeholder="+7 (XXX) XXX-XX-XX"
                            className="mt-1"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="submitterEmail">Email *</Label>
                          <Input
                            id="submitterEmail"
                            type="email"
                            placeholder="example@mail.ru"
                            className="mt-1"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="relationship">Ваша связь с участником</Label>
                          <select 
                            id="relationship"
                            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-patriotic-blue"
                          >
                            <option value="">Выберите</option>
                            <option value="self">Это я сам</option>
                            <option value="colleague">Коллега</option>
                            <option value="commander">Командир</option>
                            <option value="subordinate">Подчинённый</option>
                            <option value="relative">Родственник</option>
                            <option value="friend">Друг</option>
                            <option value="witness">Очевидец</option>
                            <option value="other">Другое</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Files Upload */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg text-patriotic-blue border-b pb-2 flex items-center">
                        <Icon name="Upload" size={20} className="mr-2" />
                        Документы и фотографии
                      </h4>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                        <Icon name="Upload" size={40} className="mx-auto text-gray-400 mb-4" />
                        <p className="text-gray-600 mb-2">
                          Загрузите фотографии, документы, справки, приказы
                        </p>
                        <p className="text-sm text-gray-500 mb-4">
                          Поддерживаются форматы: JPG, PNG, PDF, DOC. Максимум 10 файлов по 5 МБ
                        </p>
                        <Button type="button" variant="outline">
                          <Icon name="Plus" size={16} className="mr-2" />
                          Выбрать файлы
                        </Button>
                      </div>
                    </div>

                    {/* Submit */}
                    <div className="pt-6 border-t">
                      <div className="flex flex-col sm:flex-row gap-4 justify-end">
                        <Button type="button" variant="outline" className="px-8">
                          Отменить
                        </Button>
                        <Button type="submit" className="bg-patriotic-blue hover:bg-patriotic-blue/90 text-white px-8">
                          <Icon name="Send" size={16} className="mr-2" />
                          Отправить на модерацию
                        </Button>
                      </div>
                      <p className="text-xs text-gray-500 mt-4 text-center">
                        Информация будет проверена модераторами перед публикацией. Мы свяжемся с вами для уточнения деталей.
                      </p>
                    </div>
                  </form>

                    {/* Галерея памяти */}
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

                    {/* Форма добавления героя */}
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
                              {/* Информация о герое */}
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

                                <div className="grid md:grid-cols-2 gap-4">
                                  <div>
                                    <Label htmlFor="birthDate">Дата рождения *</Label>
                                    <Input
                                      id="birthDate"
                                      type="date"
                                      value={memorialForm.birthDate}
                                      onChange={(e) => setMemorialForm({...memorialForm, birthDate: e.target.value})}
                                      required
                                      className="mt-1"
                                    />
                                  </div>
                                  <div>
                                    <Label htmlFor="deathDate">Дата смерти *</Label>
                                    <Input
                                      id="deathDate"
                                      type="date"
                                      value={memorialForm.deathDate}
                                      onChange={(e) => setMemorialForm({...memorialForm, deathDate: e.target.value})}
                                      required
                                      className="mt-1"
                                    />
                                  </div>
                                </div>
                              </div>

                              {/* Военная служба */}
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

                              {/* Биография */}
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
                                  <p className="text-xs text-gray-500 mt-1">
                                    Минимум 100 символов. Старайтесь писать достоверную и проверенную информацию.
                                  </p>
                                </div>
                              </div>

                              {/* Контактная информация */}
                              <div className="space-y-4">
                                <h4 className="font-semibold text-lg text-patriotic-blue border-b pb-2">Контактная информация</h4>
                                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                                  <p className="text-sm text-gray-700">
                                    <Icon name="Lock" size={16} className="inline mr-1" />
                                    Ваши контактные данные не будут опубликованы и используются только для связи с модераторами.
                                  </p>
                                </div>
                                
                                <div className="grid md:grid-cols-2 gap-4">
                                  <div>
                                    <Label htmlFor="submitterName">Ваше имя *</Label>
                                    <Input
                                      id="submitterName"
                                      value={memorialForm.submitterName}
                                      onChange={(e) => setMemorialForm({...memorialForm, submitterName: e.target.value})}
                                      required
                                      className="mt-1"
                                    />
                                  </div>
                                  <div>
                                    <Label htmlFor="relationship">Ваша связь с героем *</Label>
                                    <Select value={memorialForm.relationship} onValueChange={(value) => setMemorialForm({...memorialForm, relationship: value})}>
                                      <SelectTrigger className="mt-1">
                                        <SelectValue placeholder="Выберите" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="Родитель">Родитель</SelectItem>
                                        <SelectItem value="Супруг/супруга">Супруг/супруга</SelectItem>
                                        <SelectItem value="Ребенок">Сын/дочь</SelectItem>
                                        <SelectItem value="Брат/сестра">Брат/сестра</SelectItem>
                                        <SelectItem value="Друг">Друг</SelectItem>
                                        <SelectItem value="Сослуживец">Сослуживец</SelectItem>
                                        <SelectItem value="Другое">Другое</SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                  <div>
                                    <Label htmlFor="submitterPhone">Телефон *</Label>
                                    <Input
                                      id="submitterPhone"
                                      type="tel"
                                      value={memorialForm.submitterPhone}
                                      onChange={(e) => setMemorialForm({...memorialForm, submitterPhone: e.target.value})}
                                      required
                                      className="mt-1"
                                      placeholder="+7 (999) 123-45-67"
                                    />
                                  </div>
                                  <div>
                                    <Label htmlFor="submitterEmail">Email *</Label>
                                    <Input
                                      id="submitterEmail"
                                      type="email"
                                      value={memorialForm.submitterEmail}
                                      onChange={(e) => setMemorialForm({...memorialForm, submitterEmail: e.target.value})}
                                      required
                                      className="mt-1"
                                      placeholder="example@mail.ru"
                                    />
                                  </div>
                                </div>
                              </div>

                              {/* Фотографии */}
                              <div className="space-y-4">
                                <h4 className="font-semibold text-lg text-patriotic-blue border-b pb-2">Фотографии</h4>
                                <div>
                                  <Label htmlFor="photos">Фотографии героя</Label>
                                  <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                                    <Icon name="Upload" size={32} className="mx-auto text-gray-400 mb-2" />
                                    <p className="text-sm text-gray-600 mb-2">
                                      Перетащите фотографии сюда или нажмите для выбора
                                    </p>
                                    <Button type="button" variant="outline">
                                      Выбрать файлы
                                    </Button>
                                  </div>
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
                                <p className="text-xs text-gray-500 mt-4 text-center">
                                  Все данные проходят модерацию перед публикацией. Мы свяжемся с вами для уточнения деталей.
                                </p>
                              </div>
                  </form>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Gallery of Achievements */}
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
                      <CardTitle className="text-lg text-blue-800">Волонтёрский центр "Помощь"</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-blue-700 mb-4">
                    Организация сбора и доставки гуманитарной помощи в зону СВО. Собрано более 500 тонн грузов.
                  </p>
                  <div className="space-y-2 text-xs text-blue-600">
                    <div className="flex justify-between">
                      <span>Руководитель:</span>
                      <span>Смирнова Е.П.</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Награда:</span>
                      <span>Медаль "За заслуги"</span>
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
                      <CardTitle className="text-lg text-purple-800">Система "Защитник-М"</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-purple-700 mb-4">
                    Разработка системы активной защиты бронетехники, повысившей выживаемость экипажей на 40%.
                  </p>
                  <div className="space-y-2 text-xs text-purple-600">
                    <div className="flex justify-between">
                      <span>Разработчик:</span>
                      <span>НИИ "Электрон"</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Статус:</span>
                      <span>Принято на вооружение</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">
                Это лишь примеры подвигов, которые уже внесены в галерею
              </p>
              <Button variant="outline" className="border-patriotic-blue text-patriotic-blue hover:bg-patriotic-blue hover:text-white">
                <Icon name="Eye" size={16} className="mr-2" />
                Просмотреть все достижения
              </Button>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-4 gap-6 mt-16">
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-green-600 mb-2">287</div>
                <div className="text-sm text-gray-600">Боевых подвигов</div>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-blue-600 mb-2">156</div>
                <div className="text-sm text-gray-600">Подвигов тыла</div>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-purple-600 mb-2">43</div>
                <div className="text-sm text-gray-600">Научных достижений</div>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-orange-600 mb-2">892</div>
                <div className="text-sm text-gray-600">Наград вручено</div>
              </CardContent>
            </Card>
          </div>
          </div>
        </section>
      )}

      {/* Interactive Timeline Preview */}
      <section className="py-20 bg-gradient-to-r from-patriotic-blue to-patriotic-red text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-montserrat text-4xl font-bold mb-6">
            Интерактивная хронология СВО
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
            Следите за ходом событий от начала операции до настоящего времени. 
            Каждая дата — это часть истории, которую важно помнить и изучать.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-3xl font-bold mb-2">24 февраля</div>
              <div className="text-lg mb-3">2022</div>
              <div className="text-sm opacity-90">Начало специальной военной операции</div>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-3xl font-bold mb-2">16 марта</div>
              <div className="text-lg mb-3">2022</div>
              <div className="text-sm opacity-90">Освобождение Мариуполя</div>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-3xl font-bold mb-2">30 сентября</div>
              <div className="text-lg mb-3">2022</div>
              <div className="text-sm opacity-90">Присоединение новых регионов</div>
            </div>
          </div>

          <Button 
            className="bg-white text-patriotic-blue hover:bg-gray-100 px-8 py-3"
            size="lg"
          >
            <Icon name="Calendar" size={20} className="mr-2" />
            Открыть полную хронологию
          </Button>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-montserrat text-4xl font-bold text-patriotic-blue mb-4">
            Присоединяйтесь к сообществу
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