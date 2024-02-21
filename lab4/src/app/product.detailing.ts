import { Injectable } from '@angular/core';
import { ProductsDetails } from './productsDetails';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailing {
  protected productsDetailsList: ProductsDetails[] = [
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
      kaspiURL: 'https://kaspi.kz/shop/p/coca-cola-classic-gazirovannyi-napitok-2-l-100208094/?c=750000000'
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
      kaspiURL: 'https://kaspi.kz/shop/p/pechen-e-orion-choco-pie-original-360-g-101006400/?c=750000000'
    },
    {
      id: 12,
      name: 'Печенье ORION Choco Pie Original 360 г',
      description: 'страна производства: Казахстан\n' +
        'условия хранения: хранить при температуре от +8°C до +23°C и относительной влажности не более 75%\n' +
        'вид шоколада: молочный\n' +
        'начинка: без начинки\n' +
        'добавки: без добавок',
      photo: 'https://resources.cdn-kaspi.kz/img/m/p/h21/h90/70365637279774.jpg?format=gallery-large',
      availableUnits: 120,
      price: "1334 ₸",
      kaspiURL: 'https://kaspi.kz/shop/p/rahat-shokoladnaja-plitka-molochnyi-100-g-100221859/?c=750000000'
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
      kaspiURL: 'https://kaspi.kz/shop/p/tassay-pit-evaja-negazirovannaja-5-l-100236269/?c=750000000'
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
      kaspiURL: 'https://kaspi.kz/shop/p/magnum-jabloko-amerikanka-kazahstan-102382796/?c=750000000'
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
      kaspiURL:'https://kaspi.kz/shop/p/magnum-mandarin-turtsija-104342837/?c=750000000'
    }
  ];

  getAllProductDetails(): ProductsDetails[] {
    return this.productsDetailsList;
  }

  getProductsDetailsById(id: number): ProductsDetails | undefined {
    return this.productsDetailsList.find(productsDetails => productsDetails.id === id);
  }
}
