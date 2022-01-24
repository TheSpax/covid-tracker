import { Component, OnInit } from '@angular/core';
import { CovidData } from 'src/app/entity/covidData';
import { CovidDataService } from 'src/app/services/covid-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  covidDataObjects: CovidData[] = [];
  errorMessage: any;

  constructor(private _covidDataService: CovidDataService) { }

  ngOnInit(): void {
    this._covidDataService.getCovidData().subscribe((data: CovidData[]) => {
      this.covidDataObjects = data;
    }, 
    (error: any) => {
      this.errorMessage = error.error.message;
      console.log(error.error.message, 'error');
    });
  }

}