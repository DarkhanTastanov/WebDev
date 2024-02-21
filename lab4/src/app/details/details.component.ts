import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProductsDetails} from "../productsDetails";
import { ProductDetailing} from "../product.detailing";
import {ProductsComponent} from "../products/products.component";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  template: `
<!--    <article>-->
<!--      <img class="listing-photo" [src]="housingLocation?.photo"-->
<!--        alt="Exterior photo of {{housingLocation?.name}}"/>-->
<!--      <section class="listing-description">-->
<!--        <h2 class="listing-heading">{{housingLocation?.name}}</h2>-->
<!--        <p class="listing-location">{{housingLocation?.city}}, {{housingLocation?.state}}</p>-->
<!--      </section>-->
<!--      <section class="listing-features">-->
<!--        <h2 class="section-heading">About this housing location</h2>-->
<!--        <ul>-->
<!--          <li>Units available: {{housingLocation?.availableUnits}}</li>-->
<!--          <li>Does this location have wifi: {{housingLocation?.wifi}}</li>-->
<!--          <li>Does this location have laundry: {{housingLocation?.laundry}}</li>-->
<!--        </ul>-->
<!--      </section>-->
<!--      <section class="listing-apply">-->
<!--        <h2 class="section-heading">Apply now to live here</h2>-->
<!--        <form [formGroup]="applyForm" (submit)="submitApplication()">-->
<!--          <label for="first-name">First Name</label>-->
<!--          <input id="first-name" type="text" formControlName="firstName">-->

<!--          <label for="last-name">Last Name</label>-->
<!--          <input id="last-name" type="text" formControlName="lastName">-->

<!--          <label for="email">Email</label>-->
<!--          <input id="email" type="email" formControlName="email">-->
<!--          <button type="submit" class="primary">Apply now</button>-->
<!--        </form>-->
<!--      </section>-->
<!--    </article>-->
<article>
  <img class="listing-photo" [src]="ProductDetailing?.photo"
       alt="Exterior photo of {{ProductDetailing?.name}}"/>
  <section class="listing-description">
    <h2 class="listing-heading">{{ProductDetailing?.name}}</h2>
  </section>
  <section class="listing-features">
    <h2 class="section-heading">About this housing location</h2>
    <ul>
      <li>Units available: {{ProductDetailing?.availableUnits}}</li>
    </ul>
  </section>
<!--  <section class="listing-apply">-->
<!--    <h2 class="section-heading">Apply now to live here</h2>-->
<!--    <form [formGroup]="applyForm" (submit)="submitApplication()">-->
<!--    </form>-->
<!--  </section>-->
</article>
  `,
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {

  // route: ActivatedRoute = inject(ActivatedRoute);
  // housingService = inject(HousingService);
  // housingLocation: HousingLocation | undefined;
  //
  // applyForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   email: new FormControl('')
  route: ActivatedRoute = inject(ActivatedRoute);
  productsDetailing = inject(ProductDetailing);
  productsDetails: ProductsDetails | undefined;


  // constructor() {
  //   const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
  //   this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
  // }
  constructor() {
    const productsDetailsId = parseInt(this.route.snapshot.params['id'], 10);
    this.productsDetails = this.productsDetailing.getProductsDetailsById(productsDetailsId);
  }
  // submitApplication() {
  //   this.housingService.submitApplication(
  //     this.applyForm.value.firstName ?? '',
  //     this.applyForm.value.lastName ?? '',
  //     this.applyForm.value.email ?? ''
  //   );
  // }

  protected readonly ProductDetailing = ProductDetailing;
}
