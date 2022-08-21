import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ActivitiesPageComponent } from './activities-page/activities-page.component';
import { CampersPageComponent } from './campers-page/campers-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { CamperFormComponent } from './camper-form/camper-form.component';
import { HttpClientModule } from '@angular/common/http';
import { CamperService } from './camper.service';
import { ActivitiesFormComponent } from './activities-form/activities-form.component';
import { CamperDetailComponent } from './camper-detail/camper-detail.component';
import { AddCamperComponent } from './add-camper/add-camper.component';
import { SearchCamperComponent } from './search-camper/search-camper.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ActivitiesPageComponent,
    CampersPageComponent,
    HomePageComponent,
    SignUpPageComponent,
    CamperFormComponent,
    CamperDetailComponent,
    AddCamperComponent,
    SearchCamperComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [CamperService],
  bootstrap: [AppComponent],
})
export class AppModule {}
