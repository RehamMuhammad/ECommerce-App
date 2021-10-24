import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component';
import {TemplateFormComponent} from './template-form/template-form.component';
import {ReactiveFormComponent} from './reactive-form/reactive-form.component';
import {ProductDetailsComponent} from './product-details/product-details.component'
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth.guard';
import {ProtectedComponent} from './protected/protected.component'
import { SaveRegisterationGuard } from './save-registeration.guard';




const routes: Routes = [
  {
  path:'', component : ProductListComponent
},

{
  path:'login', 
  children : [
    {
      path:'', component : TemplateFormComponent
    },
    {
      path:'register', 
      component : ReactiveFormComponent,
    },
 
  ]
},
{
  path:'protected', 
  component : ProtectedComponent,
  canActivate: [AuthGuard]
},
{
  path: 'product-details/:id', component : ProductDetailsComponent
},
{
  path: '**', component : NotFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
