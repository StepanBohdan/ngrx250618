import { Component, Input } from '@angular/core';
import { Car } from '../car.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../redux/app.state';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-car-single',
  templateUrl: './car-single.component.html',
  styleUrls: ['./car-single.component.css']
})
export class CarSingleComponent {

  @Input() car: Car;
  // @Output() deleteCar = new EventEmitter<Car> ()

  constructor(private store: Store<AppState>,
              private service: CarsService) {}

  onDelete() {
    // this.deleteCar.emit(this.car);
    // this.store.dispatch(new DeleteCar(this.car))
    this.service.deleteCar(this.car)
  }

  onBuy() {
    // this.car.isSold = true;
    // this.store.dispatch(new UpdateCar(this.car))
    this.car.isSold = true;
    this.service.updateCar(this.car)
  }


}
