import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingPartComponent } from './rating-part.component';

describe('RatingPartComponent', () => {
  let component: RatingPartComponent;
  let fixture: ComponentFixture<RatingPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
