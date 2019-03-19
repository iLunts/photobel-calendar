import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photographer-page',
  templateUrl: './photographer-page.component.html',
  styleUrls: ['./photographer-page.component.less']
})
export class PhotographerPageComponent implements OnInit {
  photographerArray: any = [
    {
      imageUrl: 'https://images.unsplash.com/photo-1509460913899-515f1df34fea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      firstName: 'Иван',
      lastName: 'Плумберговский',
      category: 'Детская, Свадебная, Документальная',
      rating: [{
        count: 12,
        rate: 4
      }]
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1514846326710-096e4a8035e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      firstName: 'Александра',
      lastName: 'Протапенко',
      category: 'Свадебная, Документальная',
      rating: [{
        count: 12,
        rate: 4
      }]
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      firstName: 'Маргарита',
      lastName: 'Бучиловская',
      category: 'Документальная',
      rating: [{
        count: 12,
        rate: 4
      }]
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      firstName: 'Андрей',
      lastName: 'Саевицкий',
      category: 'Свадебная, Документальная',
      rating: [{
        count: 12,
        rate: 4
      }]
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1548544149-4835e62ee5b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      firstName: 'Андрей',
      lastName: 'Нежуговский',
      category: 'Все типы съемок',
      rating: [{
        count: 12,
        rate: 4
      }]
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1503593245033-a040be3f3c82?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      firstName: 'Сергей',
      lastName: 'Лапуновскйи',
      category: 'Свадебная, Документальная, Уличная съемка',
      rating: [{
        count: 12,
        rate: 4
      }]
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
