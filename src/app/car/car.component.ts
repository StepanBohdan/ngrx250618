import { Component, OnInit } from '@angular/core';
import { AppState } from '../redux/app.state';
import { Observable } from 'rxjs/internal/Observable';
import { Store } from '@ngrx/store';
import { Cars } from './car.model';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html'
})
export class CarComponent implements OnInit {

  // public cars: Car[] = [];
  public carState: Observable<Cars>

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    // this.store.select('carPage').subscribe( ({cars}) => {
    //   this.cars = cars
    // })
    this.carState = this.store.select('carPage')
  }

  // onAdd(car: Car) {
  //   this.cars.push(car)
  // }
  //
  // onDelete(car: Car) {
  //   this.cars = this.cars.filter( c => c.id !== car.id)
  // }

}
