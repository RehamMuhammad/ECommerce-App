import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TemplateFormComponent} from '../template-form/template-form.component';
import { ReactiveFormComponent } from '../reactive-form/reactive-form.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';





@NgModule({
  declarations: [TemplateFormComponent,
    ReactiveFormComponent],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,AppRoutingModule
  ],
  exports:[TemplateFormComponent,
    ReactiveFormComponent

  ]
})
export class AuthModule { }
