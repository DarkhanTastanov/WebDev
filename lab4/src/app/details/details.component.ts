import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProductDetailing} from "../product.detailing";
import { ProductsDetails} from "../productsDetails";
import {ProductsComponent} from "../products/products.component";
import {ProductItemComponent} from "../product-item/product-item.component";
import {ProductListComponent} from "../product-list/product-list.component";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: `./details.component.html`,
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  productList = inject(ProductListComponent);
  productItem: ProductItemComponent | undefined;


  constructor() {
    const productItemId = parseInt(this.route.snapshot.params['id'], 10);
    this.productItem = this.productList.getProductItemListById(productItemId);
  }

  protected readonly ProductList = ProductListComponent;
  protected readonly ProductsComponent = ProductsComponent;

  @Input() productItemComponent!: ProductItemComponent;
  @Input() productListComponent!: ProductListComponent;
}
