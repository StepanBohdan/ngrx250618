import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { CarsFormComponent } from './cars-form/cars-form.component';
import { CarSingleComponent } from './car-single/car-single.component';
import { carsReducer } from './redux/cars.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CarsFormComponent,
    CarSingleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({CarPage: carsReducer}) //register reducers
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
