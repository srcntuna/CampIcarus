import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesPageComponent } from './activities-page/activities-page.component';
import { CampersPageComponent } from './campers-page/campers-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';

const routes: Routes = [
  { path: 'activities', component: ActivitiesPageComponent },
  { path: 'campers', component: CampersPageComponent },
  { path: 'signups', component: SignUpPageComponent },
  { path: '', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
