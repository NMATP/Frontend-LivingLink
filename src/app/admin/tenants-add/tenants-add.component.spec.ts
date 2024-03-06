import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantsAddComponent } from './tenants-add.component';

describe('TenantsAddComponent', () => {
  let component: TenantsAddComponent;
  let fixture: ComponentFixture<TenantsAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TenantsAddComponent]
    });
    fixture = TestBed.createComponent(TenantsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
