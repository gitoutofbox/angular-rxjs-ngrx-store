import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxStoreComponent } from './ngx-store.component';

describe('NgxStoreComponent', () => {
  let component: NgxStoreComponent;
  let fixture: ComponentFixture<NgxStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
