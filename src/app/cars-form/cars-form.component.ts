import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Car } from '../car.model';
import * as moment_ from 'moment';
import { AppState } from '../redux/app.state';
import { AddCar } from '../redux/cars.action';
import { CarsService } from '../cars.service';
// import { subscribeTo } from 'rxjs/internal-compatibility';
const moment = moment_;
@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.css']
})
export class CarsFormComponent implements OnInit {
  // private id: number = 2;
  carName: string = '';
  carModel: string = '';
  // @Output() addCar = new EventEmitter<Car>();
  constructor(private service: CarsService
    // private store: Store<AppState>
  ) { }

  ngOnInit() {
  }

  onAdd() {
    if(this.carModel === '' || this.carName === '') return
    // this.id = ++this.id;
        // console.log(++this.id);
    const date = moment().format('DD.MM.YY');
    const car = new Car(this.carName, date, this.carModel
      // false,
      // this.id
    );
    // debugger cause without @Output didn`t work
    // this.addCar.emit(car);
    this.service.addCar(car)
    // this.store.dispatch(new AddCar(car));
    this.carName = '';
    this.carModel = '';
  }

  onLoad() {
    this.service.loadCars()
  }
}
