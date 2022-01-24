import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DataCardComponent } from './components/data-card/data-card.component';
import { HomeComponent } from './components/home/home.component';
import { CountrySelectComponent } from './components/country-select/country-select.component';
import { HttpClientModule } from '@angular/common/http'
import { CovidDataService } from './services/covid-data.service';

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
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CovidDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
