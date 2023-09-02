import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionWorkComponent } from './section-work.component';

describe('SectionWorkComponent', () => {
  let component: SectionWorkComponent;
  let fixture: ComponentFixture<SectionWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
