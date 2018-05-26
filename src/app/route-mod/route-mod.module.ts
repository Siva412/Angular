import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from '../login-page/login-page.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { RegistrationComponent } from '../registration/registration.component'

const appRoutes: Routes = [
  {path : '', component : LoginPageComponent},
  {path : 'home', component : HomePageComponent},
  {path : 'register', component : RegistrationComponent}
];


@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing : true}
    )
  ],
  exports: [RouterModule],
  declarations: []
})
export class RouteModModule { }
