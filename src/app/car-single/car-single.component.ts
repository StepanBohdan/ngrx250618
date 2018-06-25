import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Car } from '../car.model';

@Component({
  selector: 'app-car-single',
  templateUrl: './car-single.component.html',
  styleUrls: ['./car-single.component.css']
})
export class CarSingleComponent {

  @Input() car: Car;
  @Output() deleteCar = new EventEmitter<Car> ()

  onDelete() {
    this.deleteCar.emit(this.car);
  }

  onBuy() {
    this.car.isSold = true;
  }


}
