import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Car } from '../car.model';
import * as moment from 'moment'
import { subscribeTo } from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.css']
})
export class CarsFormComponent implements OnInit {
  private id: number = 2;
  carName: string = '';
  carModel: string = '';
  @Output() addCar = new EventEmitter<Car>();

  constructor() { }

  ngOnInit() {
  }

  onAdd() {
    if(this.carModel === '' || this.carName === '') return
    this.id = ++this.id;
        // console.log(++this.id);

    const car = new Car(
      this.carName,
      moment().format('DD.MM.YY'),
      this.carModel,
      false,
      this.id
    );
    // debugger cause without @Output didn`t work
    this.addCar.emit(car);

    this.carName = '';
    this.carModel = '';
  }

  onLoad() {
    // todo
  }
}
