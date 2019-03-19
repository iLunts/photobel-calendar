import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-part',
  templateUrl: './category-part.component.html',
  styleUrls: ['./category-part.component.less']
})
export class CategoryPartComponent implements OnInit {
  calendarCat: any = [
    { path: 'hall', backColor: '#ff9a9e', name: 'Залы', icon: 'assets/svg/pack/award.svg', selected: 1, desc: 'Family hall'},
    { path: 'photographer', backColor: '#a18cd1', name: 'Фотографы', icon: 'assets/svg/pack/camera.svg', selected: 3, desc: 'Потапенко, Иваненко, Марченко' },
    { path: 'dateTime', backColor: '#f6d365', name: 'Дата и время', icon: 'assets/svg/pack/calendar.svg', selected: 1, desc: '22.12.2020 c 12:00 - 14:00' },
    { path: 'service', backColor: '#cfd9df', name: 'Услуги', icon: 'assets/svg/pack/briefcase.svg', selected: 0, desc: '' },
    { path: 'package', backColor: '#f5576c', name: 'Пакет услуг', icon: 'assets/svg/pack/box.svg', selected: 0, desc: '' },
    { path: 'package', backColor: '#4facfe', name: 'Визажисты', icon: 'assets/svg/pack/droplet.svg', selected: 0, desc: '' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
