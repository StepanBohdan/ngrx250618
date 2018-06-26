import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Car } from './car.model';
import { AppState } from './redux/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public cars: Car[] = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.select('carPage').subscribe(d => {
      console.log(d)
    })
  }

  onAdd(car: Car) {
    this.cars.push(car)
  }

  onDelete(car: Car) {
    this.cars = this.cars
      .filter( c => c.id !== car.id)
  }
}
