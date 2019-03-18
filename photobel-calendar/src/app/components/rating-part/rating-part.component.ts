import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating-part',
  templateUrl: './rating-part.component.html',
  styleUrls: ['./rating-part.component.less']
})
export class RatingPartComponent implements OnInit {

  @Input() rating: any = {
    count: 0,
    rate: 0
  };

  constructor() { }

  ngOnInit() {
  }

}
