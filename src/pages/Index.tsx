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
      deathDate: '2022-09-15',
      award: 'Орден Красной Звезды',
      biography: 'Десантник, проявивший исключительную храбрость в бою. Погиб, защищая своих товарищей.',
      photo: null,
      status: 'published'
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

  const regions = [
    { 
      id: 'moscow', 
      name: 'Москва', 
      description: 'Столица и крупнейший мегаполис России',
      battleCount: 12,
      heroCount: 156,
      memorialCount: 8
    },
    { 
      id: 'spb', 
      name: 'Санкт-Петербург', 
      description: 'Северная столица',
      battleCount: 8,
      heroCount: 98,
      memorialCount: 5
    },
    { 
      id: 'rostov', 
      name: 'Ростовская область', 
      description: 'Ворота Кавказа',
      battleCount: 15,
      heroCount: 204,
      memorialCount: 12
    },
    { 
      id: 'krasnodar', 
      name: 'Краснодарский край', 
      description: 'Житница России',
      battleCount: 10,
      heroCount: 134,
      memorialCount: 7
    },
    { 
      id: 'tatarstan', 
      name: 'Республика Татарстан', 
      description: 'Сердце Поволжья',
      battleCount: 9,
      heroCount: 112,
      memorialCount: 6
    },
    { 
      id: 'crimea', 
      name: 'Республика Крым', 
      description: 'Жемчужина Черного моря',
      battleCount: 14,
      heroCount: 187,
      memorialCount: 9
    }
  ];

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-red-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-patriotic-blue to-patriotic-red text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Icon name="Shield" size={24} className="text-white" />
            </div>
            <h1 className="font-montserrat text-5xl font-bold">Виртуальный музей СВО</h1>
          </div>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Изучайте современную историю России через интерактивные карты, хронологию событий и истории героев
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-white text-patriotic-blue hover:bg-gray-100 px-8 py-3"
              size="lg"
            >
              <Icon name="Map" size={20} className="mr-2" />
              Исследовать карту
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-patriotic-blue px-8 py-3"
              size="lg"
            >
              <Icon name="Clock" size={20} className="mr-2" />
              Хронология событий
            </Button>
          </div>
        </div>
      </section>

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

      {/* Interactive Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-montserrat text-4xl font-bold text-patriotic-blue mb-4">
              Интерактивная карта регионов
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Выберите регион для изучения местных событий, героев и памятных мест
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {regions.map((region) => (
              <Card 
                key={region.id} 
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedRegion === region.id ? 'ring-2 ring-patriotic-red bg-red-50' : ''
                }`}
                onClick={() => setSelectedRegion(selectedRegion === region.id ? null : region.id)}
              >
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="text-patriotic-blue">{region.name}</span>
                    <Icon 
                      name={selectedRegion === region.id ? "ChevronUp" : "ChevronDown"} 
                      size={20} 
                      className="text-gray-500" 
                    />
                  </CardTitle>
                  <p className="text-sm text-gray-600">{region.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-patriotic-red">{region.battleCount}</div>
                      <div className="text-xs text-gray-500">События</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-patriotic-blue">{region.heroCount}</div>
                      <div className="text-xs text-gray-500">Героев</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-700">{region.memorialCount}</div>
                      <div className="text-xs text-gray-500">Мемориалов</div>
                    </div>
                  </div>
                  
                  {selectedRegion === region.id && (
                    <div className="mt-6 pt-4 border-t">
                      <h4 className="font-semibold mb-3 text-patriotic-blue">Доступные разделы:</h4>
                      <div className="space-y-2">
                        <Button variant="outline" className="w-full justify-start text-sm">
                          <Icon name="MapPin" size={16} className="mr-2" />
                          Ключевые события
                        </Button>
                        <Button variant="outline" className="w-full justify-start text-sm">
                          <Icon name="Users" size={16} className="mr-2" />
                          Галерея героев
                        </Button>
                        <Button variant="outline" className="w-full justify-start text-sm">
                          <Icon name="Camera" size={16} className="mr-2" />
                          Фотохроника
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Immortal Regiment Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-montserrat text-4xl font-bold text-patriotic-blue mb-4 flex items-center justify-center">
              <Icon name="Heart" size={32} className="text-patriotic-red mr-3" />
              Бессмертный полк СВО
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Вечная память героям, отдавшим жизни за Родину. Здесь каждая история — это подвиг, 
              каждое имя — символ мужества и самопожертвования.
            </p>
          </div>

          {/* Memorial Dialog */}
          <div className="flex justify-center mb-8">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-patriotic-red hover:bg-patriotic-red/90 text-white px-8 py-4 text-lg">
                  <Icon name="Plus" size={20} className="mr-2" />
                  Добавить героя в галерею памяти
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl text-patriotic-blue flex items-center">
                    <Icon name="Heart" size={24} className="text-patriotic-red mr-2" />
                    Бессмертный полк СВО
                  </DialogTitle>
                </DialogHeader>
                
                <div className="mt-6">
                  <div className="bg-blue-50 rounded-lg p-4 mb-6">
                    <div className="flex items-start space-x-3">
                      <Icon name="Info" size={20} className="text-patriotic-blue mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-patriotic-blue mb-2">Важная информация</h4>
                        <p className="text-sm text-gray-700">
                          Все материалы проходят тщательную модерацию для обеспечения достоверности информации. 
                          После отправки заявки с вами свяжутся для уточнения деталей и подтверждения данных.
                        </p>
                      </div>
                    </div>
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
                          </CardContent>
                        </Card>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </DialogContent>
            </Dialog>
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