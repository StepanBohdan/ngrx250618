import { Component } from '@angular/core';
import { Car, Cars } from './car.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public cars: Car[] = [
    new Car('Ferrari', '25.06.18', '458', false, 1),
    new Car('Audi', '15.04.18', 'R8', false, 2),
  ];

  onAdd(car: Car) {
    this.cars.push(car)
  }

  onDelete(car: Car) {
    this.cars = this.cars.filter( c => c.id !== car.id)
  }
}
