import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {ProductsDetails} from '../productsDetails'

@Component({
  selector: 'app-products-details',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="productsDetails.photo" alt="Exterior photo of {{productsDetails.name}}">
      <h2 class="listing-heading">{{ productsDetails.name }}</h2>
      <a [routerLink]="['/details', productsDetails.id]">Learn More</a>
    </section>
  `,
  styleUrls: ['./products.component.css'],
})

export class ProductsComponent {

  @Input() productsDetails!: ProductsDetails;

}
