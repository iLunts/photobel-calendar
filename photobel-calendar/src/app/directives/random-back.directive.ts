import { Directive, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[randomBack]'
})
export class RandomBackDirective implements AfterViewInit {
  randomColorArray = [
    '#f44336',
    '#03A9F4',
    '#e91e63',
    '#9c27b0',
    '#673ab7',
    '#3f51b5',
    '#2196f3',
    '#00bcd4',
    '#4caf50',
    '#ff5722',
    '#795548',
    '#607d8b'
  ];
  element: any;

  constructor(
      protected _element: ElementRef,
      private _renderer: Renderer2
    ) {
    this.element = _element.nativeElement
   }

  ngAfterViewInit() {
    this.init();
  }

  init(){
    console.log(this._element);
    console.log('Random: ', this.randomColorArray[Math.floor((Math.random() * 11))]);
    this._renderer.setStyle(this.element, 'background-color:', this.randomColorArray[Math.floor((Math.random() * 11))]);
  }
}
