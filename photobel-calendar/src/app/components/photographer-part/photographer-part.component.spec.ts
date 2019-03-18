import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographerPartComponent } from './photographer-part.component';

describe('PhotographerPartComponent', () => {
  let component: PhotographerPartComponent;
  let fixture: ComponentFixture<PhotographerPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotographerPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotographerPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
