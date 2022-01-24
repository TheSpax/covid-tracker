import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-card',
  templateUrl: './data-card.component.html',
  styleUrls: ['./data-card.component.css']
})
export class DataCardComponent implements OnInit {

  @Input() red: boolean = false;
  @Input() green: boolean = false;
  @Input() gray: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
