import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessSelectionComponent } from './business-selection.component';

describe('BusinessSelectionComponent', () => {
  let component: BusinessSelectionComponent;
  let fixture: ComponentFixture<BusinessSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
