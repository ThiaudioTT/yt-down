import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoinputComponent } from './videoinput.component';

describe('VideoinputComponent', () => {
  let component: VideoinputComponent;
  let fixture: ComponentFixture<VideoinputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoinputComponent]
    });
    fixture = TestBed.createComponent(VideoinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
