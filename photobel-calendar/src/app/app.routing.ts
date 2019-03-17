import { Routes, RouterModule } from '@angular/router';
// import { AppComponent } from './app.component';
// import { CalendarComponent } from './components/calendar/calendar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CalendarPageComponent } from './pages/calendar-page/calendar-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'calendar', component: CalendarPageComponent },

  // { path: 'register', component: RegisterComponent },
  // {
  //   path: '',
  //   component: AppComponent,
  // },
  // {
  //   path: 'calendar',
  //   component: CalendarComponent,
  // },
  // { path: '**', component: AppComponent }
];

export const AppRouteRoutes = RouterModule.forRoot(routes);
