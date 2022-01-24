import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { CovidData } from 'src/app/entity/covidData';
import { CovidDataService } from 'src/app/services/covid-data.service';
=======
>>>>>>> 68d8af7d090c8a42ebbe5416bf2d4bd3bbcdccc4

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

<<<<<<< HEAD
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
=======
  constructor() { }

  ngOnInit(): void {
  }

}
>>>>>>> 68d8af7d090c8a42ebbe5416bf2d4bd3bbcdccc4
