import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-page',
  templateUrl: './calendar-page.component.html',
  styleUrls: ['./calendar-page.component.less']
})
export class CalendarPageComponent implements OnInit {
  calendarCat: any = [
    { backColor: '#a18cd1', name: 'Фотографы', icon: 'camera' },
    { backColor: '#ff9a9e', name: 'Залы', icon: 'camera' },
    { backColor: '#f6d365', name: 'Время', icon: 'camera' },
    { backColor: '#cfd9df', name: 'Услуги', icon: 'camera' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
