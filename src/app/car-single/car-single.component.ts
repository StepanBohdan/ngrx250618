import { Component, Input } from '@angular/core';
import { Car } from '../car.model';
import { Store } from '@ngrx/store';
import { AppState } from '../redux/app.state';
import { DeleteCar, UpdateCar } from '../redux/cars.action';

@Component({
  selector: 'app-car-single',
  templateUrl: './car-single.component.html',
  styleUrls: ['./car-single.component.css']
})
export class CarSingleComponent {

  @Input() car: Car;
  // @Output() deleteCar = new EventEmitter<Car> ()

  constructor(private store: Store<AppState>) {}

  onDelete() {
    // this.deleteCar.emit(this.car);
    this.store.dispatch(new DeleteCar(this.car))
  }

  onBuy() {
    this.store.dispatch(new UpdateCar(this.car))
    // this.car.isSold = true;
  }


}
