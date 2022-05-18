import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  hijiri_date = '' ;
  constructor() { }

  ngOnInit() {
    this.hijiri_date = new Intl.DateTimeFormat('ar-FR-u-ca-islamic', {day: 'numeric', month: 'long',
    weekday: 'long',year : 'numeric'}).format(Date.now());
  }

}
