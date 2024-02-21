import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';
import { ProductNames } from './productDetails'

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';
  readonly kaspi = 'https://resources.cdn-kaspi.kz/img/m/p';

  protected housingLocationList: HousingLocation[] = [
    {
      id: 0,
      name: 'Acme Fresh Start Housing',
      city: 'Chicago',
      state: 'IL',
      photo: `${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
      availableUnits: 4,
      wifi: true,
      laundry: true
    },
    {
      id: 1,
      name: 'A113 Transitional Housing',
      city: 'Santa Monica',
      state: 'CA',
      photo: `${this.baseUrl}/brandon-griggs-wR11KBaB86U-unsplash.jpg`,
      availableUnits: 0,
      wifi: false,
      laundry: true
    },
    {
      id: 2,
      name: 'Warm Beds Housing Support',
      city: 'Juneau',
      state: 'AK',
      photo: `${this.baseUrl}/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg`,
      availableUnits: 1,
      wifi: false,
      laundry: false
    },
    {
      id: 3,
      name: 'Homesteady Housing',
      city: 'Chicago',
      state: 'IL',
      photo: `${this.baseUrl}/ian-macdonald-W8z6aiwfi1E-unsplash.jpg`,
      availableUnits: 1,
      wifi: true,
      laundry: false
    },
    {
      id: 4,
      name: 'Happy Homes Group',
      city: 'Gary',
      state: 'IN',
      photo: `${this.baseUrl}/krzysztof-hepner-978RAXoXnH4-unsplash.jpg`,
      availableUnits: 1,
      wifi: true,
      laundry: false
    },
    {
      id: 5,
      name: 'Hopeful Apartment Group',
      city: 'Oakland',
      state: 'CA',
      photo: `${this.baseUrl}/r-architecture-JvQ0Q5IkeMM-unsplash.jpg`,
      availableUnits: 2,
      wifi: true,
      laundry: true
    },
    {
      id: 6,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: `${this.baseUrl}/phil-hearing-IYfp2Ixe9nM-unsplash.jpg`,
      availableUnits: 5,
      wifi: true,
      laundry: true
    },
    {
      id: 7,
      name: 'Hopeful Housing Solutions',
      city: 'Oakland',
      state: 'CA',
      photo: `${this.baseUrl}/r-architecture-GGupkreKwxA-unsplash.jpg`,
      availableUnits: 2,
      wifi: true,
      laundry: true
    },
    {
      id: 8,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: `${this.baseUrl}/saru-robert-9rP3mxf8qWI-unsplash.jpg`,
      availableUnits: 10,
      wifi: false,
      laundry: false
    },
    {
      id: 9,
      name: 'Capital Safe Towns',
      city: 'Portland',
      state: 'OR',
      photo: `${this.baseUrl}/webaliser-_TPTXZd9mOo-unsplash.jpg`,
      availableUnits: 6,
      wifi: true,
      laundry: true
    },
  ];
  protected productNamesList: ProductNames[] = [
    {
      id: 10,
      name: 'Coca-Cola Classic газированный напиток 2 л',
      photo: '${this.kaspi}/h1c/hf1/85128198684702.png?format=gallery-large',
      availableUnits: 100,
      price: "415 ₸"
    },
    {
      id: 11,
      name: 'Рахат шоколадная плитка молочный 100 г',
      photo: 'https://resources.cdn-kaspi.kz/img/m/p/h21/h90/70365637279774.jpg?format=gallery-large',
      availableUnits: 100,
      price: "415 ₸"
    },
    {
      id: 12,
      name: 'Рахат шоколадная плитка молочный 100 г',
      photo: 'https://resources.cdn-kaspi.kz/img/m/p/h21/h90/70365637279774.jpg?format=gallery-large',
      availableUnits: 1000,
      price: "546 ₸"
    },
    {
      id: 13,
      name: 'TASSAY питьевая негазированная 5 л',
      photo: 'https://resources.cdn-kaspi.kz/img/m/p/hc2/h0e/63873871708190.jpg?format=gallery-large',
      availableUnits: 10,
      price: "537 ₸"
    },
    {
      id: 14,
      name: 'MAGNUM яблоко Американка Казахстан',
      photo: '${this.baseUrl}https://resources.cdn-kaspi.kz/img/m/p/he8/h12/84708695146526.jpg?format=gallery-medium',
      availableUnits: 10000,
      price: "779 ₸/кг"
    },
    {
      id: 15,
      name: 'MAGNUM мандарин Турция',
      photo: '${this.baseUrl}/h4e/hef/84878659846174.jpg?format=gallery-medium',
      availableUnits: 10000,
      price: "899 ₸/кг"
    }
  ];

  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: number): HousingLocation | undefined {
    return this.housingLocationList.find(housingLocation => housingLocation.id === id);
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }
}
