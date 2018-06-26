import { Car } from '../car.model';
import { AddCar, CAR_ACTION } from './cars.action';

const initialState = {
  cars: [
    new Car('Ferrari', '24.06.18', '458', false, 1),
    new Car('Audi', '15.04.18', 'R8', false, 2)
  ]
};
export function carsReducer(state = initialState, action: AddCar) {
  switch (action.type) {
    case CAR_ACTION.ADD_CAR:
      return {
        ...state,
        cars: [...state.cars, action.payload]
        //add cars
      };
    default:
      return state
  }
}
