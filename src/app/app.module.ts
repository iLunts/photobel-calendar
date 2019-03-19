import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRouteRoutes } from './app.routing';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CalendarPageComponent } from './pages/calendar-page/calendar-page.component'
import { InlineSVGModule } from 'ng-inline-svg';
import { RandomBackDirective } from './directives/random-back.directive';
import { CategoryPartComponent } from './components/category-part/category-part.component';
import { TeaserPartComponent } from './components/teaser-part/teaser-part.component';
import { PhotographerPartComponent } from './components/photographer-part/photographer-part.component';
import { HeaderPartComponent } from './components/header-part/header-part.component';
import { HallPageComponent } from './pages/hall-page/hall-page.component';
import { PhotographerPageComponent } from './pages/photographer-page/photographer-page.component';
import { PackagePageComponent } from './pages/package-page/package-page.component';
import { DateTimePageComponent } from './pages/date-time-page/date-time-page.component';
import { ServicePageComponent } from './pages/service-page/service-page.component';
import { RatingPartComponent } from './components/rating-part/rating-part.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CalendarPageComponent,
    RandomBackDirective,
    CategoryPartComponent,
    TeaserPartComponent,
    PhotographerPartComponent,
    HeaderPartComponent,
    HallPageComponent,
    PhotographerPageComponent,
    PackagePageComponent,
    DateTimePageComponent,
    ServicePageComponent,
    RatingPartComponent
  ],
  imports: [
    // FlexLayoutModule,
    HttpClientModule,
    BrowserModule,
    AppRouteRoutes,
    InlineSVGModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
