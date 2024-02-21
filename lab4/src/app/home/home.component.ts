import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';
import {ProductsDetails} from "../productsDetails";
import {ProductDetailing} from "../product.detailing";
import {ProductsComponent} from "../products/products.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    //HousingLocationComponent,
    ProductsComponent,
  ],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" #filter>
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
<!--      <app-housing-location-->
<!--        *ngFor="let housingLocation of filteredLocationList"-->
<!--        [housingLocation]="housingLocation">-->
<!--      </app-housing-location>-->
      <app-products-details
        *ngFor="let productsDetails of filteredProductsList"
        [productsDetails]="productsDetails">
      </app-products-details>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})

export class HomeComponent {
  // housingLocationList: HousingLocation[] = [];
  // housingService: HousingService = inject(HousingService);
  // filteredLocationList: HousingLocation[] = [];
  productsDetailsList: ProductsDetails[] = [];
  productDetailing: ProductDetailing = inject(ProductDetailing);
  filteredProductsList: ProductsDetails[] = [];

  // constructor() {
  //   this.housingLocationList = this.housingService.getAllHousingLocations();
  //   this.filteredLocationList = this.housingLocationList;
  // }
  constructor() {
    this.productsDetailsList = this.productDetailing.getAllProductDetails();
    this.filteredProductsList = this.productsDetailsList;
  }
  // filterResults(text: string) {
  //   if (!text) {
  //     this.filteredLocationList = this.housingLocationList;
  //     return;
  //   }
  //
  //   this.filteredLocationList = this.housingLocationList.filter(
  //     housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
  //   );
  //}
  filterResults(text: string) {
      if (!text) {
        this.filteredProductsList = this.productsDetailsList;
        return;
      }

      this.filteredProductsList = this.productsDetailsList.filter(
        housingLocation => housingLocation?.price.toLowerCase().includes(text.toLowerCase())
      );
    }
}
