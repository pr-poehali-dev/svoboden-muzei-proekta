import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterRank, setFilterRank] = useState('');
  const [filterAward, setFilterAward] = useState('');
  const [notifications, setNotifications] = useState<any[]>([
    { id: 1, type: 'success', message: 'Заявка о Александре Иванове одобрена и опубликована', timestamp: new Date('2024-08-25') },
    { id: 2, type: 'pending', message: 'Заявка о Сергее Козлове находится на рассмотрении', timestamp: new Date('2024-08-28') },
    { id: 3, type: 'info', message: 'Требуется дополнительная информация о Дмитрии Петрове', timestamp: new Date('2024-08-29') }
  ]);
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
  const [submittedHeroes, setSubmittedHeroes] = useState<any[]>([
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
      photo: null,
      status: 'published'
    },
    {
      id: 2,
      name: 'Дмитрий',
      surname: 'Петров',
      rank: 'Младший сержант',
      unit: 'ВДВ России',
      birthDate: '1998-07-22',
      deathDate: '2022-09-08',
      award: 'Орден Мужества',
      biography: 'Десантник, проявивший исключительную храбрость в бою. Погиб, защищая своих товарищей.',
      photo: null,
      status: 'published'
    },
    {
      id: 3,
      name: 'Сергей',
      surname: 'Козлов',
      rank: 'Капитан',
      unit: 'Морская пехота',
      birthDate: '1990-12-03',
      deathDate: '2023-01-25',
      award: 'Орден Красной Звезды',
      biography: 'Командир подразделения, до последнего выполнявший боевую задачу. Пример мужества для всех сослуживцев.',
      photo: null,
      status: 'moderation'
    },
    {
      id: 4,
      name: 'Михаил',
      surname: 'Соколов',
      rank: 'Рядовой',
      unit: 'Танковые войска',
      birthDate: '1999-05-12',
      deathDate: '2022-07-15',
      award: 'Медаль "За отвагу"',
      biography: 'Молодой танкист, показавший образец воинского долга. Геройски сражался до последнего.',
      photo: null,
      status: 'published'
    },
    {
      id: 5,
      name: 'Владимир',
      surname: 'Николаев',
      rank: 'Майор',
      unit: 'Спецназ ГРУ',
      birthDate: '1988-11-08',
      deathDate: '2023-02-14',
      award: 'Орден Мужества',
      biography: 'Офицер спецназа, выполнявший особо сложные задания. Пожертвовал собой ради спасения мирных жителей.',
      photo: null,
      status: 'published'
    }
  ]);

  const filteredHeroes = submittedHeroes.filter(hero => {
    const matchesSearch = searchQuery === '' || 
      hero.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hero.surname.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hero.unit.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesRank = filterRank === '' || hero.rank === filterRank;
    const matchesAward = filterAward === '' || hero.award === filterAward;
    
    return matchesSearch && matchesRank && matchesAward && hero.status === 'published';
  });

  const handleMemorialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newNotification = {
      id: notifications.length + 1,
      type: 'pending',
      message: `Заявка о ${memorialForm.name} ${memorialForm.surname} отправлена на модерацию`,
      timestamp: new Date()
    };
    setNotifications([...notifications, newNotification]);
    alert('Спасибо за предоставленную информацию. Данные переданы на модерацию. Вы получите уведомление о статусе рассмотрения.');
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

  const shareToSocial = (hero: any, platform: string) => {
    const text = `Помним и чтим память героя: ${hero.name} ${hero.surname} (${hero.rank}). ${hero.biography.slice(0, 100)}...`;
    const url = window.location.href;
    
    let shareUrl = '';
    switch (platform) {
      case 'vk':
        shareUrl = `https://vk.com/share.php?url=${encodeURIComponent(url)}&title=${encodeURIComponent(text)}`;
        break;
      case 'ok':
        shareUrl = `https://connect.ok.ru/offer?url=${encodeURIComponent(url)}&title=${encodeURIComponent(text)}`;
        break;
      case 'telegram':
        shareUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
        break;
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`;
        break;
    }
    window.open(shareUrl, '_blank');
  };

  const sections = [
    {
      id: 'history',
      title: 'История СВО',
      description: 'Хронология событий и ключевые моменты специальной военной операции',
      icon: 'BookOpen',
      stats: '150+ фактов',
      content: {
        timeline: [
          { date: '24 февраля 2022', event: 'Начало специальной военной операции', details: 'Президент России объявил о начале СВО для защиты населения ДНР и ЛНР' },
          { date: 'Март 2022', event: 'Освобождение Мариуполя', details: 'Стратегически важный портовый город освобожден российскими войсками' },
          { date: 'Сентябрь 2022', event: 'Референдумы в новых регионах', details: 'Проведены референдумы о вхождении в состав России' },
          { date: '2023', event: 'Укрепление позиций', details: 'Закрепление достигнутых результатов и защита мирного населения' }
        ]
      }
    },
    {
      id: 'gallery',
      title: 'Галерея',
      description: 'Фотографии, видеоматериалы и документы с театра военных действий',
      icon: 'Image',
      stats: '500+ материалов',
      content: {
        categories: [
          { name: 'Документы', count: 120, description: 'Официальные документы и письма' },
          { name: 'Фотографии', count: 300, description: 'Фото с мест событий' },
          { name: 'Видео', count: 80, description: 'Видеоматериалы и интервью' }
        ]
      }
    },
    {
      id: 'heroes',
      title: 'Герои',
      description: 'Истории мужества и героизма участников СВО',
      icon: 'Star',
      stats: '200+ историй',
      content: {
        heroes: [
          { name: 'Герои России', count: 350, description: 'Военнослужащие, удостоенные высших наград' },
          { name: 'Добровольцы', count: 1200, description: 'Гражданские лица, вставшие на защиту' },
          { name: 'Медики', count: 500, description: 'Врачи и медсестры, спасающие жизни' }
        ]
      }
    },
    {
      id: 'resources',
      title: 'Ресурсы',
      description: 'Образовательные материалы и методические пособия',
      icon: 'GraduationCap',
      stats: '100+ ресурсов',
      content: {
        materials: [
          { type: 'Учебные пособия', count: 45, level: 'Школьники' },
          { type: 'Документальные фильмы', count: 30, level: 'Студенты' },
          { type: 'Архивные материалы', count: 25, level: 'Исследователи' }
        ]
      }
    },
    {
      id: 'timeline',
      title: 'Хронология',
      description: 'Интерактивная временная шкала событий СВО',
      icon: 'Calendar',
      stats: '24 февраля 2022',
      content: {
        periods: [
          { period: 'Февраль-Март 2022', events: 15, description: 'Начальный период операции' },
          { period: 'Апрель-Июнь 2022', events: 22, description: 'Освобождение территорий' },
          { period: 'Июль-Декабрь 2022', events: 28, description: 'Укрепление позиций' },
          { period: '2023-2024', events: 35, description: 'Стабилизация ситуации' }
        ]
      }
    },
    {
      id: 'immortal',
      title: 'Бессмертный полк СВО',
      description: 'Память о погибших героях специальной военной операции',
      icon: 'Heart',
      stats: 'Вечная память',
      content: {
        memorial: [
          { category: 'Военнослужащие', description: 'Солдаты и офицеры, отдавшие жизни' },
          { category: 'Добровольцы', description: 'Гражданские защитники' },
          { category: 'Мирные жители', description: 'Жертвы среди населения' }
        ]
      }
    }
  ];

  const statistics = [
    { label: 'Дней операции', value: '1000+', icon: 'Clock' },
    { label: 'Освобожденных городов', value: '50+', icon: 'MapPin' },
    { label: 'Героев России', value: '300+', icon: 'Medal' },
    { label: 'Спасенных жизней', value: '1000000+', icon: 'Users' }
  ];

  const mapRegions = [
    { 
      id: 'donetsk', 
      name: 'Донецкая область', 
      status: 'освобождена', 
      progress: 85, 
      coordinates: { x: 65, y: 45 },
      details: 'Освобождено 85% территории. Основные города: Мариуполь, Волноваха'
    },
    { 
      id: 'lugansk', 
      name: 'Луганская область', 
      status: 'освобождена', 
      progress: 95, 
      coordinates: { x: 70, y: 40 },
      details: 'Освобождено 95% территории. Полностью контролируется российскими войсками'
    },
    { 
      id: 'zaporizhzhia', 
      name: 'Запорожская область', 
      status: 'частично', 
      progress: 65, 
      coordinates: { x: 55, y: 50 },
      details: 'Освобождено 65% территории. Включая г. Мелитополь и Энергодар'
    },
    { 
      id: 'kherson', 
      name: 'Херсонская область', 
      status: 'частично', 
      progress: 70, 
      coordinates: { x: 50, y: 55 },
      details: 'Освобождено 70% территории. Стратегически важный регион'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-patriotic-blue via-slate-50 to-patriotic-white">
      {/* Navigation */}
      <nav className="bg-patriotic-blue/90 backdrop-blur-sm text-white p-4 sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-patriotic-red rounded-full flex items-center justify-center">
              <Icon name="Shield" size={24} className="text-white" />
            </div>
            <h1 className="font-montserrat text-xl font-bold">Виртуальный музей СВО</h1>
          </div>
          <div className="hidden md:flex space-x-6">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="hover:text-patriotic-gold transition-colors duration-300"
              >
                {section.title}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <div className="animate-fade-in">
            <Badge className="mb-6 bg-patriotic-red text-white px-4 py-2 text-lg">
              🇷🇺 Память и Честь
            </Badge>
            <h1 className="font-montserrat text-5xl md:text-7xl font-bold text-patriotic-blue mb-6">
              Виртуальный музей СВО
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Интерактивная образовательная платформа, посвященная специальной военной операции. 
              Изучайте историю, знакомьтесь с героями, исследуйте документы и материалы.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                className="bg-patriotic-red hover:bg-patriotic-red/90 text-white px-8 py-4 text-lg font-semibold"
                size="lg"
              >
                <Icon name="PlayCircle" size={20} className="mr-2" />
                Начать экскурсию
              </Button>
              <Button 
                variant="outline" 
                className="border-patriotic-blue text-patriotic-blue hover:bg-patriotic-blue hover:text-white px-8 py-4 text-lg"
                size="lg"
              >
                <Icon name="Download" size={20} className="mr-2" />
                Скачать материалы
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-patriotic-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={stat.icon as any} size={28} className="text-patriotic-blue" />
                </div>
                <h3 className="font-montserrat text-2xl font-bold text-patriotic-blue mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-20 px-4 bg-slate-100">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-montserrat text-4xl font-bold text-patriotic-blue mb-4">
              Интерактивная карта операции
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Изучите географию и прогресс освобождения территорий
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl max-w-5xl mx-auto">
            <div className="relative bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-8 mb-8" style={{ height: '400px' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-patriotic-blue/5 to-patriotic-red/5 rounded-xl"></div>
              
              {mapRegions.map((region) => (
                <div
                  key={region.id}
                  className={`absolute w-4 h-4 rounded-full cursor-pointer transition-all duration-300 hover:scale-150 ${
                    selectedRegion === region.id ? 'scale-150 ring-4 ring-patriotic-gold' : ''
                  } ${
                    region.progress > 80 ? 'bg-patriotic-red' : region.progress > 50 ? 'bg-patriotic-gold' : 'bg-gray-400'
                  }`}
                  style={{ 
                    left: `${region.coordinates.x}%`, 
                    top: `${region.coordinates.y}%` 
                  }}
                  onClick={() => setSelectedRegion(selectedRegion === region.id ? null : region.id)}
                >
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-patriotic-blue whitespace-nowrap">
                    {region.name}
                  </div>
                </div>
              ))}
              
              <div className="absolute top-4 right-4 bg-white/90 rounded-lg p-4">
                <h4 className="font-semibold mb-2 text-patriotic-blue">Легенда</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-patriotic-red rounded-full"></div>
                    <span>Освобождено (&gt;80%)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-patriotic-gold rounded-full"></div>
                    <span>Частично (&gt;50%)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                    <span>В процессе</span>
                  </div>
                </div>
              </div>
            </div>

            {selectedRegion && (
              <div className="bg-slate-50 rounded-xl p-6 animate-fade-in">
                {mapRegions
                  .filter(region => region.id === selectedRegion)
                  .map(region => (
                    <div key={region.id}>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-montserrat text-2xl font-bold text-patriotic-blue">
                          {region.name}
                        </h3>
                        <Badge className={`${
                          region.progress > 80 ? 'bg-patriotic-red' : 
                          region.progress > 50 ? 'bg-patriotic-gold' : 'bg-gray-400'
                        } text-white`}>
                          {region.status}
                        </Badge>
                      </div>
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span>Прогресс освобождения</span>
                          <span>{region.progress}%</span>
                        </div>
                        <Progress value={region.progress} className="h-3" />
                      </div>
                      <p className="text-gray-600">{region.details}</p>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-montserrat text-4xl font-bold text-patriotic-blue mb-4">
              Разделы музея
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Исследуйте различные аспекты специальной военной операции через интерактивные материалы и документы
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <Card 
                key={section.id} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-l-patriotic-red animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-12 h-12 bg-patriotic-red/10 rounded-lg flex items-center justify-center group-hover:bg-patriotic-red group-hover:text-white transition-colors duration-300">
                      <Icon name={section.icon as any} size={24} className="text-patriotic-red group-hover:text-white" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {section.stats}
                    </Badge>
                  </div>
                  <CardTitle className="font-montserrat text-xl text-patriotic-blue group-hover:text-patriotic-red transition-colors">
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {section.description}
                  </p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        className="w-full border-patriotic-blue text-patriotic-blue hover:bg-patriotic-blue hover:text-white"
                      >
                        <Icon name="ArrowRight" size={16} className="mr-2" />
                        Перейти к разделу
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="font-montserrat text-2xl text-patriotic-blue flex items-center">
                          <Icon name={section.icon as any} size={24} className="mr-3 text-patriotic-red" />
                          {section.title}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="mt-6">
                        {section.id === 'history' && (
                          <div className="space-y-6">
                            <h3 className="font-montserrat text-xl font-semibold mb-4">Ключевые события</h3>
                            {section.content.timeline.map((item, idx) => (
                              <div key={idx} className="border-l-4 border-patriotic-red pl-6 py-3">
                                <div className="flex items-center mb-2">
                                  <Badge className="bg-patriotic-gold text-patriotic-blue mr-3">{item.date}</Badge>
                                  <h4 className="font-semibold text-lg">{item.event}</h4>
                                </div>
                                <p className="text-gray-600">{item.details}</p>
                              </div>
                            ))}
                          </div>
                        )}
                        
                        {section.id === 'gallery' && (
                          <Tabs defaultValue="документы" className="w-full">
                            <TabsList className="grid w-full grid-cols-3">
                              <TabsTrigger value="документы">Документы</TabsTrigger>
                              <TabsTrigger value="фотографии">Фотографии</TabsTrigger>
                              <TabsTrigger value="видео">Видео</TabsTrigger>
                            </TabsList>
                            {section.content.categories.map((category, idx) => (
                              <TabsContent key={idx} value={category.name.toLowerCase()} className="mt-6">
                                <Card>
                                  <CardHeader>
                                    <CardTitle className="flex items-center justify-between">
                                      {category.name}
                                      <Badge>{category.count} материалов</Badge>
                                    </CardTitle>
                                  </CardHeader>
                                  <CardContent>
                                    <p className="text-gray-600 mb-4">{category.description}</p>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                      {Array.from({length: Math.min(6, category.count)}).map((_, i) => (
                                        <div key={i} className="bg-gray-100 h-24 rounded-lg flex items-center justify-center">
                                          <Icon name="FileText" size={24} className="text-gray-500" />
                                        </div>
                                      ))}
                                    </div>
                                  </CardContent>
                                </Card>
                              </TabsContent>
                            ))}
                          </Tabs>
                        )}
                        
                        {section.id === 'heroes' && (
                          <div className="space-y-6">
                            {section.content.heroes.map((heroType, idx) => (
                              <Card key={idx} className="border-l-4 border-l-patriotic-gold">
                                <CardHeader>
                                  <CardTitle className="flex items-center justify-between">
                                    <span className="flex items-center">
                                      <Icon name="Star" size={20} className="mr-2 text-patriotic-gold" />
                                      {heroType.name}
                                    </span>
                                    <Badge className="bg-patriotic-red text-white">{heroType.count}</Badge>
                                  </CardTitle>
                                </CardHeader>
                                <CardContent>
                                  <p className="text-gray-600">{heroType.description}</p>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        )}
                        
                        {section.id === 'resources' && (
                          <div className="grid md:grid-cols-2 gap-6">
                            {section.content.materials.map((material, idx) => (
                              <Card key={idx}>
                                <CardHeader>
                                  <CardTitle className="text-lg">{material.type}</CardTitle>
                                  <Badge variant="outline">{material.level}</Badge>
                                </CardHeader>
                                <CardContent>
                                  <div className="flex items-center justify-between">
                                    <span className="text-2xl font-bold text-patriotic-blue">{material.count}</span>
                                    <Button size="sm" className="bg-patriotic-red text-white">
                                      Скачать
                                    </Button>
                                  </div>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        )}
                        
                        {section.id === 'timeline' && (
                          <div className="space-y-4">
                            {section.content.periods.map((period, idx) => (
                              <div key={idx} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                                <div className="w-12 h-12 bg-patriotic-blue rounded-full flex items-center justify-center text-white font-bold">
                                  {period.events}
                                </div>
                                <div className="flex-1">
                                  <h4 className="font-semibold text-lg">{period.period}</h4>
                                  <p className="text-gray-600">{period.description}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                        
                        {section.id === 'immortal' && (
                          <div className="space-y-8">
                            {/* Header */}
                            <div className="text-center space-y-4">
                              <div className="w-16 h-16 bg-patriotic-red rounded-full flex items-center justify-center mx-auto">
                                <Icon name="Heart" size={32} className="text-white" />
                              </div>
                              <h3 className="font-montserrat text-3xl font-semibold text-patriotic-blue">Бессмертный полк СВО</h3>
                              <p className="text-gray-600 max-w-2xl mx-auto">
                                Вечная память героям, отдавшим жизни за Родину. Присылайте фотографии и информацию о ваших близких, чтобы их подвиг остался в истории.
                              </p>
                            </div>

                            <Tabs defaultValue="heroes" className="w-full">
                              <TabsList className="grid w-full grid-cols-3">
                                <TabsTrigger value="heroes" className="flex items-center space-x-2">
                                  <Icon name="Users" size={16} />
                                  <span>Галерея памяти</span>
                                </TabsTrigger>
                                <TabsTrigger value="notifications" className="flex items-center space-x-2">
                                  <Icon name="Bell" size={16} />
                                  <span>Уведомления</span>
                                  {notifications.filter(n => n.type === 'pending').length > 0 && (
                                    <Badge className="bg-patriotic-red text-white text-xs ml-1">
                                      {notifications.filter(n => n.type === 'pending').length}
                                    </Badge>
                                  )}
                                </TabsTrigger>
                                <TabsTrigger value="submit" className="flex items-center space-x-2">
                                  <Icon name="Plus" size={16} />
                                  <span>Добавить героя</span>
                                </TabsTrigger>
                              </TabsList>

                              {/* Галерея памяти */}
                              <TabsContent value="heroes" className="mt-6">
                                {/* Поиск и фильтры */}
                                <div className="bg-slate-50 rounded-xl p-6 mb-8 space-y-4">
                                  <h4 className="font-semibold text-lg text-patriotic-blue">Поиск героев</h4>
                                  <div className="grid md:grid-cols-4 gap-4">
                                    <div className="md:col-span-2">
                                      <Label htmlFor="search">Поиск по имени, фамилии или части</Label>
                                      <div className="relative">
                                        <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                        <Input
                                          id="search"
                                          value={searchQuery}
                                          onChange={(e) => setSearchQuery(e.target.value)}
                                          placeholder="Введите для поиска..."
                                          className="pl-10"
                                        />
                                      </div>
                                    </div>
                                    <div>
                                      <Label>Воинское звание</Label>
                                      <Select value={filterRank} onValueChange={setFilterRank}>
                                        <SelectTrigger>
                                          <SelectValue placeholder="Все звания" />
                                        </SelectTrigger>
                                        <SelectContent>
                                          <SelectItem value="">Все звания</SelectItem>
                                          <SelectItem value="Рядовой">Рядовой</SelectItem>
                                          <SelectItem value="Младший сержант">Младший сержант</SelectItem>
                                          <SelectItem value="Старший лейтенант">Старший лейтенант</SelectItem>
                                          <SelectItem value="Капитан">Капитан</SelectItem>
                                          <SelectItem value="Майор">Майор</SelectItem>
                                        </SelectContent>
                                      </Select>
                                    </div>
                                    <div>
                                      <Label>Награды</Label>
                                      <Select value={filterAward} onValueChange={setFilterAward}>
                                        <SelectTrigger>
                                          <SelectValue placeholder="Все награды" />
                                        </SelectTrigger>
                                        <SelectContent>
                                          <SelectItem value="">Все награды</SelectItem>
                                          <SelectItem value="Герой Российской Федерации">Герой РФ</SelectItem>
                                          <SelectItem value="Орден Мужества">Орден Мужества</SelectItem>
                                          <SelectItem value="Орден Красной Звезды">Орден Красной Звезды</SelectItem>
                                          <SelectItem value='Медаль "За отвагу"'>Медаль "За отвагу"</SelectItem>
                                        </SelectContent>
                                      </Select>
                                    </div>
                                  </div>
                                  <div className="flex items-center justify-between pt-2">
                                    <p className="text-sm text-gray-600">
                                      Найдено героев: <span className="font-semibold text-patriotic-blue">{filteredHeroes.length}</span>
                                    </p>
                                    {(searchQuery || filterRank || filterAward) && (
                                      <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => {
                                          setSearchQuery('');
                                          setFilterRank('');
                                          setFilterAward('');
                                        }}
                                      >
                                        <Icon name="X" size={16} className="mr-1" />
                                        Сбросить фильтры
                                      </Button>
                                    )}
                                  </div>
                                </div>

                                {filteredHeroes.length === 0 ? (
                                  <div className="text-center py-12">
                                    <Icon name="Search" size={48} className="mx-auto text-gray-400 mb-4" />
                                    <h3 className="text-xl font-semibold text-gray-600 mb-2">Герои не найдены</h3>
                                    <p className="text-gray-500">Попробуйте изменить параметры поиска или добавить нового героя</p>
                                  </div>
                                ) : (
                                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {filteredHeroes.map((hero) => (
                                    <Card key={hero.id} className="border-patriotic-red border-2 hover:shadow-lg transition-shadow">
                                      <CardHeader className="text-center pb-3">
                                        <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                                          {hero.photo ? (
                                            <img src={hero.photo} alt={`${hero.name} ${hero.surname}`} className="w-full h-full rounded-full object-cover" />
                                          ) : (
                                            <Icon name="User" size={32} className="text-gray-500" />
                                          )}
                                        </div>
                                        <CardTitle className="text-lg">
                                          {hero.name} {hero.surname}
                                        </CardTitle>
                                        <Badge className="bg-patriotic-gold text-patriotic-blue">
                                          {hero.rank}
                                        </Badge>
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
                                        
                                        {/* Кнопки социальных сетей */}
                                        <div className="pt-4 border-t mt-4">
                                          <p className="text-xs text-gray-500 mb-3">Поделиться памятью:</p>
                                          <div className="flex justify-center space-x-2">
                                            <Button
                                              size="sm"
                                              variant="outline"
                                              className="p-2 h-8 w-8"
                                              onClick={() => shareToSocial(hero, 'vk')}
                                              title="Поделиться ВКонтакте"
                                            >
                                              <span className="text-xs font-bold text-blue-600">VK</span>
                                            </Button>
                                            <Button
                                              size="sm"
                                              variant="outline"
                                              className="p-2 h-8 w-8"
                                              onClick={() => shareToSocial(hero, 'ok')}
                                              title="Поделиться в Одноклассниках"
                                            >
                                              <span className="text-xs font-bold text-orange-600">OK</span>
                                            </Button>
                                            <Button
                                              size="sm"
                                              variant="outline"
                                              className="p-2 h-8 w-8"
                                              onClick={() => shareToSocial(hero, 'telegram')}
                                              title="Поделиться в Telegram"
                                            >
                                              <Icon name="Send" size={12} className="text-blue-500" />
                                            </Button>
                                            <Button
                                              size="sm"
                                              variant="outline"
                                              className="p-2 h-8 w-8"
                                              onClick={() => shareToSocial(hero, 'whatsapp')}
                                              title="Поделиться в WhatsApp"
                                            >
                                              <Icon name="MessageCircle" size={12} className="text-green-600" />
                                            </Button>
                                          </div>
                                        </div>
                                      </CardContent>
                                    </Card>
                                    ))}
                                  </div>
                                )}
                              </TabsContent>

                              {/* Уведомления */}
                              <TabsContent value="notifications" className="mt-6">
                                <div className="space-y-4">
                                  <div className="flex items-center justify-between">
                                    <h4 className="font-semibold text-lg text-patriotic-blue">Уведомления о статусе заявок</h4>
                                    <Badge className="bg-slate-100 text-slate-600">
                                      {notifications.length} уведомлений
                                    </Badge>
                                  </div>
                                  
                                  {notifications.length === 0 ? (
                                    <div className="text-center py-12">
                                      <Icon name="Bell" size={48} className="mx-auto text-gray-400 mb-4" />
                                      <h3 className="text-xl font-semibold text-gray-600 mb-2">Уведомлений нет</h3>
                                      <p className="text-gray-500">Здесь будут отображаться статусы ваших заявок</p>
                                    </div>
                                  ) : (
                                    <div className="space-y-3">
                                      {notifications
                                        .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
                                        .map((notification) => (
                                        <Card key={notification.id} className={`border-l-4 ${
                                          notification.type === 'success' ? 'border-l-green-500 bg-green-50' :
                                          notification.type === 'pending' ? 'border-l-yellow-500 bg-yellow-50' :
                                          'border-l-blue-500 bg-blue-50'
                                        }`}>
                                          <CardContent className="p-4">
                                            <div className="flex items-start justify-between">
                                              <div className="flex items-start space-x-3">
                                                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                                  notification.type === 'success' ? 'bg-green-500' :
                                                  notification.type === 'pending' ? 'bg-yellow-500' :
                                                  'bg-blue-500'
                                                }`}>
                                                  <Icon 
                                                    name={
                                                      notification.type === 'success' ? 'CheckCircle' :
                                                      notification.type === 'pending' ? 'Clock' :
                                                      'Info'
                                                    }
                                                    size={16}
                                                    className="text-white"
                                                  />
                                                </div>
                                                <div className="flex-1">
                                                  <p className="text-sm text-gray-800">{notification.message}</p>
                                                  <p className="text-xs text-gray-500 mt-1">
                                                    {new Date(notification.timestamp).toLocaleDateString('ru-RU', {
                                                      day: 'numeric',
                                                      month: 'long',
                                                      hour: '2-digit',
                                                      minute: '2-digit'
                                                    })}
                                                  </p>
                                                </div>
                                              </div>
                                              <Badge 
                                                className={`text-xs ${
                                                  notification.type === 'success' ? 'bg-green-100 text-green-800' :
                                                  notification.type === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                                                  'bg-blue-100 text-blue-800'
                                                }`}
                                              >
                                                {notification.type === 'success' ? 'Одобрено' :
                                                 notification.type === 'pending' ? 'На рассмотрении' :
                                                 'Требует внимания'}
                                              </Badge>
                                            </div>
                                          </CardContent>
                                        </Card>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              </TabsContent>

                              {/* Форма добавления */}
                              <TabsContent value="submit" className="mt-6">
                                <div className="max-w-4xl mx-auto">
                                  <Card className="border-patriotic-blue border-2">
                                    <CardHeader>
                                      <CardTitle className="text-center text-patriotic-blue flex items-center justify-center space-x-2">
                                        <Icon name="Heart" size={24} className="text-patriotic-red" />
                                        <span>Добавить информацию о герое</span>
                                      </CardTitle>
                                      <p className="text-center text-gray-600">
                                        Заполните форму, чтобы увековечить память о вашем близком человеке
                                      </p>
                                    </CardHeader>
                                    <CardContent>
                                      <form onSubmit={handleMemorialSubmit} className="space-y-6">
                                        {/* Основная информация */}
                                        <div className="space-y-4">
                                          <h4 className="font-semibold text-lg text-patriotic-blue border-b pb-2">Основная информация</h4>
                                          <div className="grid md:grid-cols-3 gap-4">
                                            <div>
                                              <Label htmlFor="surname">Фамилия *</Label>
                                              <Input
                                                id="surname"
                                                value={memorialForm.surname}
                                                onChange={(e) => setMemorialForm({...memorialForm, surname: e.target.value})}
                                                required
                                                placeholder="Иванов"
                                              />
                                            </div>
                                            <div>
                                              <Label htmlFor="name">Имя *</Label>
                                              <Input
                                                id="name"
                                                value={memorialForm.name}
                                                onChange={(e) => setMemorialForm({...memorialForm, name: e.target.value})}
                                                required
                                                placeholder="Александр"
                                              />
                                            </div>
                                            <div>
                                              <Label htmlFor="middleName">Отчество</Label>
                                              <Input
                                                id="middleName"
                                                value={memorialForm.middleName}
                                                onChange={(e) => setMemorialForm({...memorialForm, middleName: e.target.value})}
                                                placeholder="Петрович"
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
                                              />
                                            </div>
                                          </div>
                                        </div>

                                        {/* Военная информация */}
                                        <div className="space-y-4">
                                          <h4 className="font-semibold text-lg text-patriotic-blue border-b pb-2">Военная служба</h4>
                                          <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                              <Label htmlFor="rank">Воинское звание</Label>
                                              <Select value={memorialForm.rank} onValueChange={(value) => setMemorialForm({...memorialForm, rank: value})}>
                                                <SelectTrigger>
                                                  <SelectValue placeholder="Выберите звание" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                  <SelectItem value="рядовой">Рядовой</SelectItem>
                                                  <SelectItem value="ефрейтор">Ефрейтор</SelectItem>
                                                  <SelectItem value="младший-сержант">Младший сержант</SelectItem>
                                                  <SelectItem value="сержант">Сержант</SelectItem>
                                                  <SelectItem value="старший-сержант">Старший сержант</SelectItem>
                                                  <SelectItem value="прапорщик">Прапорщик</SelectItem>
                                                  <SelectItem value="младший-лейтенант">Младший лейтенант</SelectItem>
                                                  <SelectItem value="лейтенант">Лейтенант</SelectItem>
                                                  <SelectItem value="старший-лейтенант">Старший лейтенант</SelectItem>
                                                  <SelectItem value="капитан">Капитан</SelectItem>
                                                  <SelectItem value="майор">Майор</SelectItem>
                                                  <SelectItem value="подполковник">Подполковник</SelectItem>
                                                  <SelectItem value="полковник">Полковник</SelectItem>
                                                </SelectContent>
                                              </Select>
                                            </div>
                                            <div>
                                              <Label htmlFor="unit">Воинская часть/подразделение</Label>
                                              <Input
                                                id="unit"
                                                value={memorialForm.unit}
                                                onChange={(e) => setMemorialForm({...memorialForm, unit: e.target.value})}
                                                placeholder="58-я общевойсковая армия"
                                              />
                                            </div>
                                          </div>
                                          
                                          <div>
                                            <Label htmlFor="awardType">Награды (если имеются)</Label>
                                            <Select value={memorialForm.awardType} onValueChange={(value) => setMemorialForm({...memorialForm, awardType: value})}>
                                              <SelectTrigger>
                                                <SelectValue placeholder="Выберите награду" />
                                              </SelectTrigger>
                                              <SelectContent>
                                                <SelectItem value="герой-рф">Герой Российской Федерации</SelectItem>
                                                <SelectItem value="орден-мужества">Орден Мужества</SelectItem>
                                                <SelectItem value="орден-красной-звезды">Орден Красной Звезды</SelectItem>
                                                <SelectItem value="медаль-за-отвагу">Медаль "За отвагу"</SelectItem>
                                                <SelectItem value="медаль-суворова">Медаль Суворова</SelectItem>
                                                <SelectItem value="медаль-за-боевые-отличия">Медаль "За боевые отличия"</SelectItem>
                                                <SelectItem value="другое">Другое</SelectItem>
                                              </SelectContent>
                                            </Select>
                                          </div>
                                        </div>

                                        {/* Биография */}
                                        <div className="space-y-4">
                                          <h4 className="font-semibold text-lg text-patriotic-blue border-b pb-2">О герое</h4>
                                          <div>
                                            <Label htmlFor="biography">Биография, подвиг, воспоминания *</Label>
                                            <Textarea
                                              id="biography"
                                              value={memorialForm.biography}
                                              onChange={(e) => setMemorialForm({...memorialForm, biography: e.target.value})}
                                              required
                                              rows={5}
                                              placeholder="Расскажите о жизни, характере, подвиге героя. Поделитесь воспоминаниями о том, каким он был человеком..."
                                            />
                                          </div>
                                        </div>

                                        {/* Информация о подающем */}
                                        <div className="space-y-4">
                                          <h4 className="font-semibold text-lg text-patriotic-blue border-b pb-2">Контактная информация</h4>
                                          <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                              <Label htmlFor="submitterName">Ваше имя *</Label>
                                              <Input
                                                id="submitterName"
                                                value={memorialForm.submitterName}
                                                onChange={(e) => setMemorialForm({...memorialForm, submitterName: e.target.value})}
                                                required
                                                placeholder="Как к вам обращаться"
                                              />
                                            </div>
                                            <div>
                                              <Label htmlFor="relationship">Степень родства *</Label>
                                              <Select value={memorialForm.relationship} onValueChange={(value) => setMemorialForm({...memorialForm, relationship: value})}>
                                                <SelectTrigger>
                                                  <SelectValue placeholder="Выберите" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                  <SelectItem value="отец">Отец</SelectItem>
                                                  <SelectItem value="мать">Мать</SelectItem>
                                                  <SelectItem value="супруг">Супруг/супруга</SelectItem>
                                                  <SelectItem value="сын">Сын</SelectItem>
                                                  <SelectItem value="дочь">Дочь</SelectItem>
                                                  <SelectItem value="брат">Брат</SelectItem>
                                                  <SelectItem value="сестра">Сестра</SelectItem>
                                                  <SelectItem value="друг">Друг</SelectItem>
                                                  <SelectItem value="сослуживец">Сослуживец</SelectItem>
                                                  <SelectItem value="другое">Другое</SelectItem>
                                                </SelectContent>
                                              </Select>
                                            </div>
                                          </div>
                                          
                                          <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                              <Label htmlFor="submitterPhone">Телефон *</Label>
                                              <Input
                                                id="submitterPhone"
                                                value={memorialForm.submitterPhone}
                                                onChange={(e) => setMemorialForm({...memorialForm, submitterPhone: e.target.value})}
                                                required
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
                                                placeholder="email@example.com"
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
                                    </CardContent>
                                  </Card>
                                </div>
                              </TabsContent>
                            </Tabs>
                          </div>
                        )}
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Timeline Preview */}
      <section className="py-20 bg-gradient-to-r from-patriotic-blue to-patriotic-red text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-montserrat text-4xl font-bold mb-6">
            Интерактивная хронология СВО
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
            Следите за ключевыми событиями специальной военной операции в интерактивном формате
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div className="text-left">
                <h3 className="font-montserrat text-2xl font-bold mb-2">24 февраля 2022</h3>
                <p className="opacity-80">Начало специальной военной операции</p>
              </div>
              <div className="w-16 h-16 bg-patriotic-gold rounded-full flex items-center justify-center">
                <Icon name="Calendar" size={32} className="text-patriotic-blue" />
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-white/5 rounded-lg p-4">
                <Icon name="MapPin" size={20} className="text-patriotic-gold mb-2" />
                <h4 className="font-semibold mb-1">География</h4>
                <p className="text-sm opacity-80">Основные направления операции</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <Icon name="Users" size={20} className="text-patriotic-gold mb-2" />
                <h4 className="font-semibold mb-1">Участники</h4>
                <p className="text-sm opacity-80">Военнослужащие и добровольцы</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <Icon name="Target" size={20} className="text-patriotic-gold mb-2" />
                <h4 className="font-semibold mb-1">Цели</h4>
                <p className="text-sm opacity-80">Защита мирного населения</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-patriotic-white">
        <div className="container mx-auto text-center">
          <h2 className="font-montserrat text-3xl font-bold text-patriotic-blue mb-6">
            Присоединяйтесь к изучению истории
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