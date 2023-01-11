import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = ' Sports Items ';
  cricket = 0;
  football = 0;
  totalItems;

  constructor() {
    this.calculateTotalItems();
  }

  cricketchanged(count: number) {
    this.cricket = count;
    this.calculateTotalItems();
  }

  footballchanged(count: number) {
    this.football = count;
    this.calculateTotalItems();
  }

  calculateTotalItems() {
    this.totalItems = this.cricket + this.football;
  }
}
