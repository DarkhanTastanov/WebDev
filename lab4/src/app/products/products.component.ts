import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {ProductItemComponent} from "../product-item/product-item.component";
import {ProductListComponent} from "../product-list/product-list.component";

@Component({
  selector: 'app-products-details',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})

export class ProductsComponent {

  @Input() productItemComponent!: ProductItemComponent;
  @Input() productListComponent!: ProductListComponent;
}
