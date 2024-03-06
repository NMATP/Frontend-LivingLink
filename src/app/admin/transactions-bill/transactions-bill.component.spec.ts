import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsBillComponent } from './transactions-bill.component';

describe('TransactionsBillComponent', () => {
  let component: TransactionsBillComponent;
  let fixture: ComponentFixture<TransactionsBillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionsBillComponent]
    });
    fixture = TestBed.createComponent(TransactionsBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
