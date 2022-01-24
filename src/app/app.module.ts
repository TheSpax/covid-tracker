import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DataCardComponent } from './components/data-card/data-card.component';
import { HomeComponent } from './components/home/home.component';
import { CountrySelectComponent } from './components/country-select/country-select.component';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http'
import { CovidDataService } from './services/covid-data.service';
=======
>>>>>>> 68d8af7d090c8a42ebbe5416bf2d4bd3bbcdccc4

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DataCardComponent,
    HomeComponent,
    CountrySelectComponent,
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CovidDataService],
=======
    AppRoutingModule
  ],
  providers: [],
>>>>>>> 68d8af7d090c8a42ebbe5416bf2d4bd3bbcdccc4
  bootstrap: [AppComponent]
})
export class AppModule { }
