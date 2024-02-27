import { Injectable } from '@angular/core';
import { ProductItemComponent} from "../product-item/product-item.component";

@Injectable({
  providedIn: 'root'
})
  export class ProductListComponent {
  protected productItemList: ProductItemComponent[] = [
    {
      id: 10,
      name: 'Coca-Cola Classic газированный напиток 2 л',
      description: 'страна производства: Казахстан\n'+
        'условия хранения: хранить в сухом месте при температуре от 0°С до +20°С, избегая прямого попадания солнечных лучей\n' +
        'тип: газированный напиток\n' +
        'без сахара: Нет\n' +
        'вкус: кола',
      photo: 'https://resources.cdn-kaspi.kz/img/m/p/h1c/hf1/85128198684702.png?format=gallery-large',
      availableUnits: 100,
      price: "415 ₸",
      kaspiURL: 'https://kaspi.kz/shop/p/coca-cola-classic-gazirovannyi-napitok-2-l-100208094/?c=750000000',
      numberOfLikes: 10,
      category: 'Food'
    },
    {
      id: 11,
      name: 'Рахат шоколадная плитка молочный 100 г',
      description: 'страна производства: Венгрия\n' +
        'условия хранения: хранить в сухом месте при температуре не выше 25° С и относительной влажности воздуха не более 75 %. Употребить сразу после вскрытия.\n' +
        'разновидность печенья: бисквитное\n' +
        'добавки: суфле',
      photo: 'https://resources.cdn-kaspi.kz/img/m/p/h14/h11/64092537225246.jpg?format=gallery-medium',
      availableUnits: 100,
      price: "415 ₸",
      kaspiURL: 'https://kaspi.kz/shop/p/pechen-e-orion-choco-pie-original-360-g-101006400/?c=750000000',
      numberOfLikes: 15,
      category: 'Food'
    },
    {
      id: 13,
      name: 'TASSAY питьевая негазированная 5 л',
      description: 'страна производства: Казахстан\n' +
        'условия хранения: при температуре от 0\'С до +20\'С и относительной влажности воздуха не более 75%.\n' +
        'тип: питьевая',
      photo: 'https://resources.cdn-kaspi.kz/img/m/p/hc2/h0e/63873871708190.jpg?format=gallery-large',
      availableUnits: 10,
      price: "537 ₸",
      kaspiURL: 'https://kaspi.kz/shop/p/tassay-pit-evaja-negazirovannaja-5-l-100236269/?c=750000000',
      numberOfLikes: 176,
      category: 'Food'
    },
    {
      id: 14,
      name: 'MAGNUM яблоко Американка Казахстан',
      description: 'страна производства: Казахстан\n' +
        'разновидность: косточковые\n' +
        'вид фруктов: яблоко\n' +
        'сорт: американка',
      photo: 'https://resources.cdn-kaspi.kz/img/m/p/he8/h12/84708695146526.jpg?format=gallery-medium',
      availableUnits: 10000,
      price: "779 ₸/кг",
      kaspiURL: 'https://kaspi.kz/shop/p/magnum-jabloko-amerikanka-kazahstan-102382796/?c=750000000',
      numberOfLikes: 6,
      category: 'Food'
    },
    {
      id: 15,
      name: 'MAGNUM мандарин Турция',
      description: 'страна производства: Турция\n' +
        'разновидность: цитрусовые\n' +
        'вид фруктов: мандарин',
      photo: 'https://resources.cdn-kaspi.kz/img/m/p/h4e/hef/84878659846174.jpg?format=gallery-medium',
      availableUnits: 10000,
      price: "899 ₸/кг",
      kaspiURL:'https://kaspi.kz/shop/p/magnum-mandarin-turtsija-104342837/?c=750000000',
      numberOfLikes: 16,
      category: 'Food'
    },
    {
      id: 16,
      name: 'Терафлю порошок 325 мг 10 шт',
      description: 'назначение: жаропонижающие\n' +
        'антибиотик: Нет\n' +
        'рецептурный препарат: Нет\n' +
        'действующее вещество: парацетамол\n' +
        'условия отпуска: без рецепта\n' +
        'способ применения: пероральный\n' +
        'лекарственная форма: порошок\n' +
        'возрастные ограничения: с 18 лет\n' +
        'дозировка: 325 мг\n' +
        'страна производитель: Швейцария',
      photo: 'https://resources.cdn-kaspi.kz/img/m/p/heb/hf3/64143706423326.jpg?format=gallery-medium',
      availableUnits: 465,
      price: '2 093 ₸',
      kaspiURL: 'https://kaspi.kz/shop/p/teraflju-poroshok-325-mg-10-sht-101114328/?c=750000000',
      numberOfLikes: 56,
      category: 'Pharmacy'
    },
    {
      id: 17,
      name: 'Нимесил суспензия 100 мг 30 шт',
      description: 'назначение: воспаление и инфекции\n' +
        'антибиотик: Нет\n' +
        'рецептурный препарат: Нет\n' +
        'действующее вещество: нимесулид\n' +
        'условия отпуска: без рецепта\n' +
        'способ применения: пероральный\n' +
        'лекарственная форма: суспензия\n' +
        'возрастные ограничения: с 18 лет\n' +
        'дозировка: 100 мг\n' +
        'страна производитель: Италия',
      photo: 'https://resources.cdn-kaspi.kz/img/m/p/h3e/h0c/64060872884254.jpg?format=gallery-medium',
      availableUnits: 65,
      price: '4 055 ₸',
      kaspiURL: 'https://kaspi.kz/shop/p/nimesil-suspenzija-100-mg-30-sht-101671829/?c=750000000',
      numberOfLikes: 786,
      category: 'Pharmacy'
    },
    {
      id: 30,
      name: 'Танфлекс спрей 0.15% 30 мл',
      description: 'назначение: средства от боли в горле\n' +
        'антибиотик: Нет\n' +
        'рецептурный препарат: Нет\n' +
        'действующее вещество: бензидамин гидрохлорид\n' +
        'условия отпуска: без рецепта\n' +
        'способ применения: пероральный\n' +
        'лекарственная форма: спрей\n' +
        'возрастные ограничения: с 6 лет\n' +
        'дозировка: 0.15%\n' +
        'страна производитель: Турция',
      photo: 'https://resources.cdn-kaspi.kz/img/m/p/hdc/he3/64225140637726.jpg?format=gallery-medium',
      availableUnits: 78,
      price: '1 838 ₸',
      kaspiURL: 'https://kaspi.kz/shop/p/tanfleks-sprei-0-15-30-ml-101143382/?c=750000000',
      numberOfLikes: 9,
      category: 'Pharmacy'
    },
    {
      id:18,
      name: 'ТайлолФен порошок 500 мг 12 шт',
      description: 'назначение: вспомогательные средства при простуде\n' +
        'антибиотик: Нет\n' +
        'рецептурный препарат: Нет\n' +
        'действующее вещество: парацетамол\n' +
        'условия отпуска: без рецепта\n' +
        'способ применения: пероральный\n' +
        'лекарственная форма: порошок\n' +
        'возрастные ограничения: с 12 лет\n' +
        'дозировка: 500 мг\n' +
        'страна производитель: Турция',
      photo: 'https://resources.cdn-kaspi.kz/img/m/p/h38/h54/63969558626334.jpg?format=gallery-medium',
      availableUnits: 564,
      price: '1 722 ₸',
      kaspiURL: 'https://kaspi.kz/shop/p/tailolfen-poroshok-500-mg-12-sht-101090363/?c=750000000',
      numberOfLikes: 97,
      category: 'Pharmacy'
    },
    {
      id: 19,
      name: 'Ибупрофен таблетки 400 мг 20 шт',
      description: 'назначение: воспаление и инфекции\n' +
        'антибиотик: Нет\n' +
        'рецептурный препарат: Нет\n' +
        'действующее вещество: ибупрофен\n' +
        'условия отпуска: отпуск только по рецепту\n' +
        'способ применения: пероральный\n' +
        'лекарственная форма: таблетки\n' +
        'возрастные ограничения: с 18 лет\n' +
        'дозировка: 400 мг\n' +
        'страна производитель: Казахстан',
      price: '609 ₸',
      photo: 'https://resources.cdn-kaspi.kz/img/m/p/he1/h53/82807869046814.png?format=gallery-medium',
      availableUnits: 56,
      kaspiURL: 'https://kaspi.kz/shop/p/ibuprofen-tabletki-400-mg-20-sht-101375956/?c=750000000',
      numberOfLikes: 663,
      category: 'Pharmacy'
    },
    {
      id: 20,
      name: 'Стул N-12, 81x50x25 см, белый',
      description: 'тип: стул\n' +
        'материал: пластик\n' +
        'обивка: отсутствует\n' +
        'жесткость сиденья: высокая\n' +
        'высота, см: 81.0 см\n' +
        'ширина, см: 50.0 см\n' +
        'глубина, см: 25.0 см\n' +
        'цвет: белый\n' +
        'страна: Китай',
      photo: 'https://resources.cdn-kaspi.kz/img/m/p/h59/h3b/63900105277470.jpg?format=gallery-medium',
      price: '7 389 ₸',
      kaspiURL: 'https://kaspi.kz/shop/p/stul-n-12-81x50x25-sm-belyi-100189414/?c=750000000',
      availableUnits: 100,
      numberOfLikes: 55,
      category: 'Furniture'
    },
    {
      id: 21,
      name: 'ЗМИ Вешалка стойка, напольная металл, 63x177 см, Луч 5 черная',
      description: 'конструкция: стойка, ,напольная\n' +
        'материал: металл\n' +
        'количество крючков: 5\n' +
        'ширина, см: 63.0 см\n' +
        'высота, см: 177.0 см\n' +
        'цвет: черный',
      photo: 'https://resources.cdn-kaspi.kz/img/m/p/he5/h41/64340225916958.jpg?format=gallery-medium',
      price: '6 978 ₸',
      kaspiURL: 'https://kaspi.kz/shop/p/zmi-veshalka-stoika-napol-naja-metall-63x177-sm-luch-5-chernaja--102471194/?c=750000000',
      availableUnits: 140,
      numberOfLikes: 4,
      category: 'Furniture'
    },
    {
      id: 22,
      name: 'Раскладушка 14565987 голубой',
      description: 'максимальная нагрузка: 100.0 кг\n' +
        'материал: пластик, ,сталь, ,полиэстер\n' +
        'двуспальная: Нет',
      photo: 'https://resources.cdn-kaspi.kz/img/m/p/h02/haa/64485572050974.jpg?format=gallery-medium',
      price: '11 963 ₸',
      kaspiURL: 'https://kaspi.kz/shop/p/14565987-goluboi-106267794/?c=750000000',
      availableUnits: 14,
      numberOfLikes: 44,
      category: 'Furniture'
    },
    {
      id: 23,
      name: 'Стеллаж Abuer Стеллаж 8 секций 1020890 ЛДСП, 66 смx29 смx129 см, белый',
      description: 'количество полок: 8\n' +
        'материал: ЛДСП\n' +
        'ширина: 66.0 см\n' +
        'глубина: 29.0 см\n' +
        'высота: 129.0 см\n' +
        'цвет: белый\n' +
        'страна: Казахстан',
      photo: 'https://resources.cdn-kaspi.kz/img/m/p/h3d/hbf/64919963402270.jpg?format=gallery-medium',
      price: '14 752 ₸',
      kaspiURL: 'https://kaspi.kz/shop/p/stellazh-abuer-stellazh-8-sektsii-1020890-ldsp-66-smx29-smx129-sm-belyi-104771353/?c=750000000',
      availableUnits: 185,
      numberOfLikes: 46,
      category: 'Furniture'
    },
    {
      id: 24,
      name: 'Стул Qaz Oryndyq AS002, 95x55x55 см, бежевый',
      description: 'тип: стул\n' +
        'материал: металл\n' +
        'обивка: велюр\n' +
        'жесткость сиденья: средняя\n' +
        'высота, см: 95\n' +
        'ширина, см: 55.0 см\n' +
        'глубина, см: 55.0 см\n' +
        'цвет: бежевый\n' +
        'страна: Казахстан',
      photo: 'https://resources.cdn-kaspi.kz/img/m/p/h05/hd2/64515775430686.jpg?format=gallery-medium',
      price: '16 000 ₸',
      kaspiURL: 'https://kaspi.kz/shop/p/stul-qaz-oryndyq-as002-95x55x55-sm-bezhevyi-106633022/?c=750000000',
      availableUnits: 85,
      numberOfLikes: 66,
      category: 'Furniture'
    },
    {
      id: 25,
      name: 'Электрочайник BEREKE BR-810 серый',
      description: 'фильтр от накипи: Нет\n' +
        'тип: электрочайник\n' +
        'объем: 2.0 л\n' +
        'мощность: 1500.0 Вт\n' +
        'материал корпуса: нержавеющая сталь\n' +
        'цвет: серый',
      photo: 'https://resources.cdn-kaspi.kz/img/m/p/h08/hde/80282292781086.jpg?format=gallery-medium',
      price: '1 800 ₸',
      kaspiURL: 'https://kaspi.kz/shop/p/elektrochainik-bereke-br-810-seryi-109981423/?c=750000000',
      availableUnits: 185,
      numberOfLikes: 664,
      category: 'Home equipment'
    },
    {
      id: 26,
      name: 'Кухонные весы Generic SF-400',
      description: 'тип: электронные\n' +
        'предел взвешивания: 10.0 кг\n' +
        'точность измерения: 1.0 г\n' +
        'счетчик калорий: Да\n' +
        'цвет: белый',
      photo: 'https://resources.cdn-kaspi.kz/img/m/p/h47/ha1/64094073815070.jpg?format=gallery-medium',
      price: '848 ₸',
      kaspiURL: 'https://kaspi.kz/shop/p/generic-sf-400-102531445/?c=750000000',
      availableUnits: 45,
      numberOfLikes: 7,
      category: 'Home equipment'
    },
    {
      id: 27,
      name: 'Вафельница Proliss Pro-808 черный',
      description: 'материал корпуса: металл/пластик\n' +
        'тип: вафельница\n' +
        'количество порций: 2\n' +
        'антипригарное покрытие: Да\n' +
        'цвет: черный',
      photo: 'https://resources.cdn-kaspi.kz/img/m/p/h05/hd2/64515775430686.jpg?format=gallery-medium',
      price: '3 897 ₸',
      kaspiURL: 'https://kaspi.kz/shop/p/vafel-nitsa-proliss-pro-808-chernyi-105935489/?c=750000000',
      availableUnits: 95,
      numberOfLikes: 95,
      category: 'Home equipment'
    },
    {
      id: 28,
      name: 'Блендер HAROOKO A9 черный',
      description: 'тип: портативный\n' +
        'мощность: 75.0 Вт\n' +
        'управление: механическое\n' +
        'количество скоростей: 1\n' +
        'измельчитель: Да\n' +
        'цвет: черный',
      photo: 'https://resources.cdn-kaspi.kz/img/m/p/h87/ha9/83061892743198.png?format=gallery-medium',
      price: '14 900 ₸',
      kaspiURL: 'https://kaspi.kz/shop/p/harooko-a9-chernyi-110414586/?c=750000000',
      availableUnits: 67,
      numberOfLikes: 5,
      category: 'Home equipment'
    },
    {
      id: 29,
      name: 'Микроволновая печь Magna M20B7001-W белый',
      description: 'тип управления: механическое\n' +
        'внутренний объем: 20.0 л\n' +
        'расположение: отдельностоящая\n' +
        'внутреннее покрытие камеры: эмаль\n' +
        'гриль: Нет\n' +
        'конвекция: Нет\n' +
        'цвет: белый',
      photo: 'https://resources.cdn-kaspi.kz/img/m/p/h53/hc2/69911835344926.jpg?format=gallery-medium',
      price: '24 490 ₸',
      kaspiURL: 'https://kaspi.kz/shop/p/magna-m20b7001-w-belyi-108426636/?c=750000000',
      availableUnits: 75,
      numberOfLikes: 26,
      category: 'Home equipment'
    },
  ];

  getAllProductItemList(): ProductItemComponent[] {
    return this.productItemList;
  }

  getProductItemListById(id: number): ProductItemComponent | undefined {
    return this.productItemList.find(productItemComponent => productItemComponent.id === id);
  }
  incrementLikes(id: number): void {
    const product = this.productItemList.find(item => item.id === id);
    if (product) {
      product.numberOfLikes++;
    }
  }

  decrementLikes(id: number): void {
    const product = this.productItemList.find(item => item.id === id);
    if (product && product.numberOfLikes > 0) {
      product.numberOfLikes--;
    }
  }
}
