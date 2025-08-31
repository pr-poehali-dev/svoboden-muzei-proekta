import React from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const HeroForm = () => {
  return (
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

              {/* Technical/Scientific Details */}
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
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default HeroForm;