import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesPageComponent } from './activities-page/activities-page.component';
import { CamperDetailComponent } from './camper-detail/camper-detail.component';
import { CampersPageComponent } from './campers-page/campers-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';

const routes: Routes = [
  { path: 'campers', component: CampersPageComponent },
  { path: 'campers/:id', component: CamperDetailComponent },
  { path: 'signups', component: SignUpPageComponent },
  { path: '', component: HomePageComponent },
  { path: 'activities', component: ActivitiesPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
