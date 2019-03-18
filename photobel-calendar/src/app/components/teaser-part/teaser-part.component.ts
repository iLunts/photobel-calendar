import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teaser-part',
  templateUrl: './teaser-part.component.html',
  styleUrls: ['./teaser-part.component.less']
})
export class TeaserPartComponent implements OnInit {
  calendarSales: any = [
    { teaserUrl: 'https://images.unsplash.com/photo-1552688455-b6faba3c8631?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80', badge: 'Сними голубую луну', count: 11, title: 'Василий Васнецов', desc: 'Работа с использованием базового оснащения и естественного освещения, в том числе видеосъемка без использования дополнительного светового оборудования.', studioName: '', studioAvatar: '' },
    { teaserUrl: 'https://images.unsplash.com/photo-1552611052-60b2c00a2be8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2126&q=80', badge: 'Фуд снэк', count: 30, title: 'Что-то новонькое в фото бизнесе', desc: 'Проведение мероприятия с участием большого количества людей, в том числе вечеринки, презентации и мастер-классы.', studioName: '', studioAvatar: '' },
    { teaserUrl: 'https://images.unsplash.com/photo-1552633520-1131e7526a6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80', badge: 'Свадебная съемка', count: 1, title: 'Проверка заголовка большого', desc: 'Работа с использованием дополнительного технического и энергоемкого осветительного оборудования.', studioName: '', studioAvatar: '' },
    { teaserUrl: 'https://images.unsplash.com/photo-1552619499-e00311627a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80', badge: 'Предметная съемка', count: 3, title: 'Мероприятие по фотосъемке', desc: 'Работа с использованием базового оснащения и естественного освещения, в том числе видеосъемка без использования дополнительного светового оборудования.', studioName: '', studioAvatar: '' },
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
