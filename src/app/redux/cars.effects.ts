import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { AddCar, CAR_ACTION } from './cars.action';
import { switchMap, mergeMap } from 'rxjs/operators';
import { Car } from '../car/car.model';
import { CarsService } from '../car/cars.service';

@Injectable()
export  class CarsEffects {

  constructor(private action$: Actions,
              private service: CarsService) {}

  @Effect() loadCars = this.action$.ofType(CAR_ACTION.ADD_CAR)
    .pipe(
      switchMap((action: AddCar) => {
      return this.service.preloadCars()
      }),
      mergeMap((cars: Car[]) => {
        return [
          {
            type: CAR_ACTION.LOAD_CARS,
            payload: cars
          }
        ]
      })
    )

}
