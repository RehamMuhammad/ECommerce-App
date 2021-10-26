//Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import {AuthModule} from './auth/auth.module'
import {HttpClientModule, HTTP_INTERCEPTORS} from  '@angular/common/http';
//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProtectedComponent } from './protected/protected.component';
import { CounterComponent } from './counter/counter.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { DynamicProductDetailsComponent } from './dynamic-product-details/dynamic-product-details.component';
import { ProductDynamicDetailsComponent } from './product-dynamic-details/product-dynamic-details.component';
//Pipes
import { EgpCuurncyPipe } from './egp-cuurncy.pipe';
import {RequestInterceptor} from './request.interceptor';
import { LoaderComponent } from './loader/loader.component'


 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotFoundComponent,
    ProtectedComponent,
    CounterComponent,
    ProductsListComponent,
    DynamicProductDetailsComponent,
    EgpCuurncyPipe,
    ProductDynamicDetailsComponent,
    LoaderComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,
    SharedModule, 
    AuthModule,
    HttpClientModule,
  ],
  providers: [
    {
   provide: HTTP_INTERCEPTORS,
    useClass: RequestInterceptor,
    multi:true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
