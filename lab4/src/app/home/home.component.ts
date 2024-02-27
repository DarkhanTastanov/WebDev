import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductsDetails} from "../productsDetails";
import {ProductDetailing} from "../product.detailing";
import {ProductsComponent} from "../products/products.component";
import {ProductItemComponent} from "../product-item/product-item.component";
import {ProductListComponent} from "../product-list/product-list.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ProductsComponent
  ],
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent {
  productsDetailsList: ProductItemComponent[] = [];
  productDetailing: ProductListComponent = inject(ProductListComponent);
  filteredProductsList: ProductItemComponent[] = [];

  constructor() {
    this.productsDetailsList = this.productDetailing.getAllProductItemList();
    this.filteredProductsList = this.productsDetailsList;
  }
  filterResults(text: string) {
      if (!text) {
        this.filteredProductsList = this.productsDetailsList;
        return;
      }

      this.filteredProductsList = this.productsDetailsList.filter(
        product => product?.category.toLowerCase().includes(text.toLowerCase())
      );
    }
}
