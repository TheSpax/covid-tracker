import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DataCardComponent } from './components/data-card/data-card.component';
import { HomeComponent } from './components/home/home.component';
import { CountrySelectComponent } from './components/country-select/country-select.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
