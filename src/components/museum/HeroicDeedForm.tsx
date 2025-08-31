import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Icon from '@/components/ui/icon';

interface HeroicDeedFormProps {
  onSubmit: (data: any) => void;
  onCancel: () => void;
}

const HeroicDeedForm = ({ onSubmit, onCancel }: HeroicDeedFormProps) => {
  const [formData, setFormData] = useState({
    category: '',
    title: '',
    description: '',
    date: '',
    location: '',
    participantName: '',
    participantRank: '',
    participantUnit: '',
    participantAge: '',
    awards: '',
    techDetails: '',
    submitterName: '',
    submitterEmail: '',
    submitterPhone: '',
    submitterRelation: '',
    documents: [] as File[],
    photos: [] as File[]
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleFieldChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-patriotic-blue">
          Добавить подвиг в галерею
        </CardTitle>
        <p className="text-gray-600 mt-2">
          Заполните форму, чтобы рассказать о героическом поступке. Все материалы проходят проверку перед публикацией.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
              Категория подвига
            </h3>
            <RadioGroup value={formData.category} onValueChange={(value) => handleFieldChange('category', value)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Label className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <RadioGroupItem value="combat" />
                  <div>
                    <span className="font-medium">Боевые подвиги</span>
                    <p className="text-sm text-gray-600">Героизм в боевых действиях</p>
                  </div>
                </Label>
                <Label className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <RadioGroupItem value="rear" />
                  <div>
                    <span className="font-medium">Подвиги тыла</span>
                    <p className="text-sm text-gray-600">Помощь фронту и населению</p>
                  </div>
                </Label>
                <Label className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <RadioGroupItem value="science" />
                  <div>
                    <span className="font-medium">Научные достижения</span>
                    <p className="text-sm text-gray-600">Разработки для победы</p>
                  </div>
                </Label>
                <Label className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <RadioGroupItem value="awards" />
                  <div>
                    <span className="font-medium">Награды и медали</span>
                    <p className="text-sm text-gray-600">Государственные награды</p>
                  </div>
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
              Основная информация о подвиге
            </h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="title">Название подвига *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => handleFieldChange('title', e.target.value)}
                  required
                  placeholder="Краткое описание героического поступка"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="description">Подробное описание *</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleFieldChange('description', e.target.value)}
                  required
                  rows={6}
                  placeholder="Расскажите подробно о подвиге, обстоятельствах и его значении"
                  className="mt-1"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="date">Дата события *</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => handleFieldChange('date', e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="location">Место события *</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => handleFieldChange('location', e.target.value)}
                    required
                    placeholder="Город, область или координаты"
                    className="mt-1"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
              Данные об участнике
            </h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="participantName">ФИО участника *</Label>
                <Input
                  id="participantName"
                  value={formData.participantName}
                  onChange={(e) => handleFieldChange('participantName', e.target.value)}
                  required
                  placeholder="Полное имя героя"
                  className="mt-1"
                />
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="participantRank">Звание/должность</Label>
                  <Input
                    id="participantRank"
                    value={formData.participantRank}
                    onChange={(e) => handleFieldChange('participantRank', e.target.value)}
                    placeholder="Воинское звание"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="participantUnit">Подразделение</Label>
                  <Input
                    id="participantUnit"
                    value={formData.participantUnit}
                    onChange={(e) => handleFieldChange('participantUnit', e.target.value)}
                    placeholder="Воинская часть"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="participantAge">Возраст</Label>
                  <Input
                    id="participantAge"
                    type="number"
                    value={formData.participantAge}
                    onChange={(e) => handleFieldChange('participantAge', e.target.value)}
                    placeholder="Полных лет"
                    className="mt-1"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="awards">Награды и поощрения</Label>
                <Textarea
                  id="awards"
                  value={formData.awards}
                  onChange={(e) => handleFieldChange('awards', e.target.value)}
                  rows={3}
                  placeholder="Перечислите полученные награды, медали, благодарности"
                  className="mt-1"
                />
              </div>
            </div>
          </div>

          {formData.category === 'science' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                Технические детали
              </h3>
              <div>
                <Label htmlFor="techDetails">Описание разработки/достижения</Label>
                <Textarea
                  id="techDetails"
                  value={formData.techDetails}
                  onChange={(e) => handleFieldChange('techDetails', e.target.value)}
                  rows={4}
                  placeholder="Технические характеристики, область применения, эффективность"
                  className="mt-1"
                />
              </div>
            </div>
          )}

          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
              Контактная информация
            </h3>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="submitterName">Ваше имя *</Label>
                  <Input
                    id="submitterName"
                    value={formData.submitterName}
                    onChange={(e) => handleFieldChange('submitterName', e.target.value)}
                    required
                    placeholder="Как к вам обращаться"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="submitterRelation">Кем приходитесь участнику</Label>
                  <Select 
                    value={formData.submitterRelation} 
                    onValueChange={(value) => handleFieldChange('submitterRelation', value)}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Выберите отношение" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="self">Я сам участник</SelectItem>
                      <SelectItem value="relative">Родственник</SelectItem>
                      <SelectItem value="colleague">Сослуживец</SelectItem>
                      <SelectItem value="witness">Свидетель</SelectItem>
                      <SelectItem value="other">Другое</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="submitterEmail">Email *</Label>
                  <Input
                    id="submitterEmail"
                    type="email"
                    value={formData.submitterEmail}
                    onChange={(e) => handleFieldChange('submitterEmail', e.target.value)}
                    required
                    placeholder="your@email.com"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="submitterPhone">Телефон</Label>
                  <Input
                    id="submitterPhone"
                    type="tel"
                    value={formData.submitterPhone}
                    onChange={(e) => handleFieldChange('submitterPhone', e.target.value)}
                    placeholder="+7 (999) 999-99-99"
                    className="mt-1"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
              Документы и фотографии
            </h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="documents">Документы</Label>
                <div className="mt-1 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Icon name="FileText" size={48} className="mx-auto text-gray-400 mb-3" />
                  <p className="text-sm text-gray-600">
                    Загрузите скан-копии документов, подтверждающих подвиг
                  </p>
                  <Button variant="outline" className="mt-3">
                    <Icon name="Upload" size={16} className="mr-2" />
                    Выбрать файлы
                  </Button>
                </div>
              </div>
              <div>
                <Label htmlFor="photos">Фотографии</Label>
                <div className="mt-1 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Icon name="Camera" size={48} className="mx-auto text-gray-400 mb-3" />
                  <p className="text-sm text-gray-600">
                    Загрузите фотографии участника или события
                  </p>
                  <Button variant="outline" className="mt-3">
                    <Icon name="Upload" size={16} className="mr-2" />
                    Выбрать файлы
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-4 pt-6 border-t">
            <Button type="button" variant="outline" onClick={onCancel}>
              Отменить
            </Button>
            <Button type="submit" className="bg-patriotic-blue hover:bg-patriotic-blue/90">
              <Icon name="Send" size={16} className="mr-2" />
              Отправить на модерацию
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default HeroicDeedForm;