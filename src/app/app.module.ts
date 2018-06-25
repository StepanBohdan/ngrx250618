import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarsFormComponent } from './cars-form/cars-form.component';
import { CarSingleComponent } from './car-single/car-single.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsFormComponent,
    CarSingleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
