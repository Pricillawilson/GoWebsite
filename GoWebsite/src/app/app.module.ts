import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import{ AppRoutingModule } from '';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OfferComponent } from './offer/offer.component';
import { ProfileComponent } from './profile/profile.component';
import { BusComponent } from './bus/bus.component';
import { TrainComponent } from './train/train.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OfferComponent,
    ProfileComponent,
    BusComponent,
    TrainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
