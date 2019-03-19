import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time-page',
  templateUrl: './date-time-page.component.html',
  styleUrls: ['./date-time-page.component.less']
})
export class DateTimePageComponent implements OnInit {
  dateList: any = [{}];
  timeArray: any = [
    {
      start: '08:00',
      end: '09:00',
      state: true,
    },
    {
      start: '09:00',
      end: '10:00',
      state: false,
    },
    {
      start: '10:00',
      end: '11:00',
      state: false,
    },
    {
      start: '11:00',
      end: '12:00',
      state: true,
    },
    {
      start: '12:00',
      end: '13:00',
      state: true,
    },
    {
      start: '13:00',
      end: '14:00',
      state: false,
    },
    {
      start: '14:00',
      end: '15:00',
      state: false,
    },
    {
      start: '15:00',
      end: '16:00',
      state: true,
    },
    {
      start: '16:00',
      end: '17:00',
      state: true,
    },
    {
      start: '17:00',
      end: '18:00',
      state: false,
    },
    {
      start: '18:00',
      end: '19:00',
      state: false,
    },
    {
      start: '19:00',
      end: '20:00',
      state: false,
    },
    {
      start: '20:00',
      end: '21:00',
      state: true,
    },
    {
      start: '21:00',
      end: '22:00',
      state: true,
    },
    {
      start: '22:00',
      end: '23:00',
      state: false,
    },
  ];

  constructor() { }

  ngOnInit() {
    this.getDaysArray(2019, 3)
  }

  getDaysArray(year, month) {
    let names = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    let date = new Date(year, month - 1, 1);
    while (date.getMonth() == month - 1) {
      this.dateList.push({'numb': date.getDate(), 'day': names[date.getDay()]});
      date.setDate(date.getDate() + 1);
    }
    this.dateList.shift();
    
    // return result;
    console.log(this.dateList);
    return this.dateList;
  }
}
