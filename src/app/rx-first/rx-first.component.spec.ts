import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxFirstComponent } from './rx-first.component';

describe('RxFirstComponent', () => {
  let component: RxFirstComponent;
  let fixture: ComponentFixture<RxFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
