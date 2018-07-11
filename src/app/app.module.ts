import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { CarsFormComponent } from './cars-form/cars-form.component';
import { CarSingleComponent } from './car-single/car-single.component';
import { carsReducer } from './redux/cars.reducer';
import { CarsService } from './cars.service';
import { HttpClientModule } from '@angular/common/http';
import { CarsEffects } from './redux/cars.effects';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'; //not for prod
import { environment } from '../environments/environment.prod'; //not for prod
// JWT
import { HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { routing }        from './app.routing';
import { HomeComponent } from './home';
import { LoginComponent } from './login/login.component';
import { fakeBackendProvider } from './_helpers/fake-backend';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { JwtInterceptor } from './_helpers/jwt.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    CarsFormComponent,
    CarSingleComponent,

    // JWT
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    EffectsModule.forRoot([CarsEffects]),
    StoreModule.forRoot({carPage: carsReducer}),
    RouterModule.forRoot([
      {path: '', component: AppComponent}
    ]),
    StoreRouterConnectingModule,
    environment.production ? [] : StoreDevtoolsModule.instrument(), //not for prod

    // JWT
    ReactiveFormsModule,
    routing
  ],
  providers: [
    CarsService,
    // JWT
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
