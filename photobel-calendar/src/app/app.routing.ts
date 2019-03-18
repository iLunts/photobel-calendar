import { Routes, RouterModule } from '@angular/router';
// import { AppComponent } from './app.component';
// import { CalendarComponent } from './components/calendar/calendar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CalendarPageComponent } from './pages/calendar-page/calendar-page.component';
import { HallPageComponent } from './pages/hall-page/hall-page.component';
import { PhotographerPageComponent } from './pages/photographer-page/photographer-page.component';
import { ServicePageComponent } from './pages/service-page/service-page.component';
import { PackagePageComponent } from './pages/package-page/package-page.component';
import { DateTimePageComponent } from './pages/date-time-page/date-time-page.component';

const routes: Routes = [
  { path: '', component: CalendarPageComponent },
  { path: 'hall', component: HallPageComponent },
  { path: 'photographer', component: PhotographerPageComponent },
  { path: 'service', component: ServicePageComponent },
  { path: 'package', component: PackagePageComponent },
  { path: 'dateTime', component: DateTimePageComponent },
  // { path: 'calendar', component: CalendarPageComponent },

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

export const AppRouteRoutes = RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' });
