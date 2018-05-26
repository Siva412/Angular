import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouteModModule } from './route-mod/route-mod.module';
import { CommonFacService } from './services/common-fac.service';


import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegistrationComponent } from './registration/registration.component'
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    RegistrationComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    RouteModModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    CommonFacService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
