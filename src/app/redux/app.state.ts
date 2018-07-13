import { Car } from '../car/car.model';

export interface AppState {
  carPage: {
    cars: Car[]
  }
}
