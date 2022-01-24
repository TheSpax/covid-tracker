import { Component, Input, OnInit } from '@angular/core';
import { CovidData } from 'src/app/entity/covidData';
import { CovidDataService } from 'src/app/services/covid-data.service';

@Component({
  selector: 'app-country-select',
  templateUrl: './country-select.component.html',
  styleUrls: ['./country-select.component.css']
})
export class CountrySelectComponent implements OnInit {

  covidDataObjects: CovidData[] = [];
  errorMessage: any;

  constructor(private _covidDataService: CovidDataService) { }

  ngOnInit(): void {
    this._covidDataService.getCovidData().subscribe((data: CovidData[]) => {
      this.covidDataObjects = data;
      this.covidDataObjects.pop();
    },
    (error: any) => {
      this.errorMessage = error.error.message;
      console.log(error.error.message, 'error');
    })
  }

}