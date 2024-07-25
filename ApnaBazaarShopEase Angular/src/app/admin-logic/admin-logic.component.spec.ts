import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLogicComponent } from './admin-logic.component';

describe('AdminLogicComponent', () => {
  let component: AdminLogicComponent;
  let fixture: ComponentFixture<AdminLogicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminLogicComponent]
    });
    fixture = TestBed.createComponent(AdminLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
