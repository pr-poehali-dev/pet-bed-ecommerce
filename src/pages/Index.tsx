import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Heart" className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-primary">PetBeds Store</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">Главная</a>
            <a href="#catalog" className="text-sm font-medium hover:text-primary transition-colors">Каталог</a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О бренде</a>
            <a href="#delivery" className="text-sm font-medium hover:text-primary transition-colors">Доставка</a>
            <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button variant="outline" size="sm">
            <Icon name="ShoppingCart" className="h-4 w-4 mr-2" />
            Корзина
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 md:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-bold text-primary leading-tight">
                  Премиум лежанки для ваших питомцев
                </h2>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Натуральные материалы с ортопедическим эффектом. 
                  Комфорт и здоровье вашего любимца — наш приоритет.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  Смотреть каталог
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  Узнать больше
                </Button>
              </div>
              <div className="flex items-center space-x-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Icon name="Truck" className="h-5 w-5" />
                  <span>Бесплатная доставка</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Shield" className="h-5 w-5" />
                  <span>Гарантия качества</span>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="/img/b305e521-880e-4d62-8196-5b37eb0dc08a.jpg" 
                alt="Премиум лежанка для питомцев"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Натуральные материалы</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-primary">Наш каталог</h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выберите идеальную лежанку для вашего питомца из нашей коллекции премиум-изделий
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product 1 */}
            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="/img/ded86262-7786-4b81-a22a-54d7b815f335.jpg"
                  alt="Ортопедическая лежанка Premium"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-2">Ортопедическая лежанка Premium</h4>
                <p className="text-muted-foreground mb-4">
                  Мемори-пена высокой плотности с чехлом из органического льна
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-primary">12 990 ₽</div>
                  <Button>
                    <Icon name="Plus" className="h-4 w-4 mr-2" />
                    В корзину
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Product 2 */}
            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="/img/42b4e1d4-3264-4490-b926-1491a6ed3731.jpg"
                  alt="Лежанка Comfort Plus"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-2">Лежанка Comfort Plus</h4>
                <p className="text-muted-foreground mb-4">
                  Натуральная шерсть мериноса с ортопедической поддержкой
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-primary">15 990 ₽</div>
                  <Button>
                    <Icon name="Plus" className="h-4 w-4 mr-2" />
                    В корзину
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Product 3 */}
            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="/img/b305e521-880e-4d62-8196-5b37eb0dc08a.jpg"
                  alt="Лежанка Elite"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-2">Лежанка Elite</h4>
                <p className="text-muted-foreground mb-4">
                  Премиум коллекция с термо-регуляцией и антибактериальным покрытием
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-primary">19 990 ₽</div>
                  <Button>
                    <Icon name="Plus" className="h-4 w-4 mr-2" />
                    В корзину
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-3xl md:text-4xl font-bold text-primary">О нашем бренде</h3>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Мы создаем премиальные лежанки для домашних животных, используя только 
                  натуральные материалы высочайшего качества.
                </p>
                <p>
                  Каждая лежанка разработана с учетом ортопедических потребностей питомцев 
                  и обеспечивает максимальный комфорт для здорового сна.
                </p>
                <p>
                  Наша миссия — забота о здоровье и комфорте ваших любимцев через 
                  инновационные решения и безупречное качество.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">10K+</div>
                  <div className="text-sm text-muted-foreground">Довольных питомцев</div>
                </div>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <img 
                src="/img/42b4e1d4-3264-4490-b926-1491a6ed3731.jpg"
                alt="Качество наших изделий"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section id="delivery" className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-primary">Доставка и гарантии</h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы заботимся о том, чтобы ваш заказ дошел быстро и в идеальном состоянии
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 animate-fade-in">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Icon name="Truck" className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-4">Быстрая доставка</h4>
              <p className="text-muted-foreground">
                Доставка по Москве — 1 день, по России — 2-5 дней. 
                Бесплатно при заказе от 10 000 ₽
              </p>
            </Card>
            
            <Card className="text-center p-8 animate-fade-in">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Icon name="Shield" className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-4">Гарантия качества</h4>
              <p className="text-muted-foreground">
                2 года гарантии на все изделия. Обмен или возврат в течение 30 дней 
                без объяснения причин
              </p>
            </Card>
            
            <Card className="text-center p-8 animate-fade-in">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Icon name="Heart" className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-4">Забота о питомцах</h4>
              <p className="text-muted-foreground">
                Бесплатная консультация по выбору лежанки и уходу за ней. 
                Поддержка 24/7
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-primary">Контакты</h3>
            <p className="text-xl text-muted-foreground">
              Свяжитесь с нами удобным способом
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center animate-fade-in">
              <Icon name="Phone" className="h-8 w-8 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Телефон</h4>
              <p className="text-muted-foreground">+7 (495) 123-45-67</p>
            </Card>
            
            <Card className="p-6 text-center animate-fade-in">
              <Icon name="Mail" className="h-8 w-8 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Email</h4>
              <p className="text-muted-foreground">info@petbeds.ru</p>
            </Card>
            
            <Card className="p-6 text-center animate-fade-in">
              <Icon name="MapPin" className="h-8 w-8 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Адрес</h4>
              <p className="text-muted-foreground">Москва, ул. Примерная, 123</p>
            </Card>
            
            <Card className="p-6 text-center animate-fade-in">
              <Icon name="Clock" className="h-8 w-8 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Время работы</h4>
              <p className="text-muted-foreground">Пн-Вс: 9:00 - 21:00</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/50 py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Icon name="Heart" className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold">PetBeds Store</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Премиум лежанки для ваших питомцев из натуральных материалов
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Каталог</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Для собак</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Для кошек</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Универсальные</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Компания</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#about" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#delivery" className="hover:text-primary transition-colors">Доставка</a></li>
                <li><a href="#contacts" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Поддержка</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Гарантия</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Возврат</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 PetBeds Store. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}