import { NgModule } from '@angular/core';
import {OfferComponent} from './offer/offer.component';
import {ProfileComponent} from './profile/profile.component';
import {HomeComponent} from './home/home.component';
import {BusComponent} from './bus/bus.component';
import{TrainComponent} from './train/train.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {path: 'offer', component: OfferComponent},{path: 'profile', component: ProfileComponent },
   {path: '', component: HomeComponent},{path:'bus',component:BusComponent},{path:'train',component: TrainComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
