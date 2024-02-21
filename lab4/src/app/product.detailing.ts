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
      description: 'Cola',
      photo: 'https://resources.cdn-kaspi.kz/img/m/p/h1c/hf1/85128198684702.png?format=gallery-large',
      availableUnits: 100,
      price: "415 ₸"
    },
    {
      id: 11,
      name: 'Рахат шоколадная плитка молочный 100 г',
      description: 'Cola',
      photo: 'https://resources.cdn-kaspi.kz/img/m/p/h21/h90/70365637279774.jpg?format=gallery-large',
      availableUnits: 100,
      price: "415 ₸"
    },
    {
      id: 12,
      name: 'Рахат шоколадная плитка молочный 100 г',
      description: 'Cola',
      photo: 'https://resources.cdn-kaspi.kz/img/m/p/h21/h90/70365637279774.jpg?format=gallery-large',
      availableUnits: 1000,
      price: "546 ₸"
    },
    {
      id: 13,
      name: 'TASSAY питьевая негазированная 5 л',
      description: 'Cola',
      photo: 'https://resources.cdn-kaspi.kz/img/m/p/hc2/h0e/63873871708190.jpg?format=gallery-large',
      availableUnits: 10,
      price: "537 ₸"
    },
    {
      id: 14,
      name: 'MAGNUM яблоко Американка Казахстан',
      description: 'Cola',
      photo: 'https://resources.cdn-kaspi.kz/img/m/p/he8/h12/84708695146526.jpg?format=gallery-medium',
      availableUnits: 10000,
      price: "779 ₸/кг"
    },
    {
      id: 15,
      name: 'MAGNUM мандарин Турция',
      description: 'Cola',
      photo: 'https://resources.cdn-kaspi.kz/img/m/p/h4e/hef/84878659846174.jpg?format=gallery-medium',
      availableUnits: 10000,
      price: "899 ₸/кг"
    }
  ];

  getAllProductDetails(): ProductsDetails[] {
    return this.productsDetailsList;
  }

  getProductsDetailsById(id: number): ProductsDetails | undefined {
    return this.productsDetailsList.find(productsDetails => productsDetails.id === id);
  }
}
