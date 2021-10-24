import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { AvailabilityPipe } from '../availability.pipe';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [ProductListComponent,
    ProductItemComponent, ProductDetailsComponent , AvailabilityPipe ],
  imports: [
    CommonModule,ReactiveFormsModule, FormsModule,AppRoutingModule
  ],
  exports: [
    ProductListComponent,
    ProductItemComponent, ProductDetailsComponent , AvailabilityPipe
    
  ]
})
export class SharedModule { }
