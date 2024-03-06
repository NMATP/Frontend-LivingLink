import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilitiesRecordComponent } from './utilities-record.component';

describe('UtilitiesRecordComponent', () => {
  let component: UtilitiesRecordComponent;
  let fixture: ComponentFixture<UtilitiesRecordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UtilitiesRecordComponent]
    });
    fixture = TestBed.createComponent(UtilitiesRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
