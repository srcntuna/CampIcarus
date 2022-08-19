import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ActivitiesPageComponent } from './activities-page/activities-page.component';
import { CampersPageComponent } from './campers-page/campers-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { CamperFormComponent } from './camper-form/camper-form.component';
import { ActivitiesFormComponent } from './activities-form/activities-form.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ActivitiesPageComponent,
    CampersPageComponent,
    HomePageComponent,
    SignUpPageComponent,
    CamperFormComponent,
    ActivitiesFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
