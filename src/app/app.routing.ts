import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { AuthGuard } from './_guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard], pathMatch: 'full' },
  { path: 'car', component: CarComponent, canActivate: [AuthGuard], pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },

  // otherwise redirect to home
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
