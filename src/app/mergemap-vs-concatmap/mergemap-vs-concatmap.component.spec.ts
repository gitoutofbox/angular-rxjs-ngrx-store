import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MergemapVsConcatmapComponent } from './mergemap-vs-concatmap.component';

describe('MergemapVsConcatmapComponent', () => {
  let component: MergemapVsConcatmapComponent;
  let fixture: ComponentFixture<MergemapVsConcatmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MergemapVsConcatmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MergemapVsConcatmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
