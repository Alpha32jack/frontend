import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterStudentPage } from './register-student.page';

describe('RegisterStudentPage', () => {
  let component: RegisterStudentPage;
  let fixture: ComponentFixture<RegisterStudentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterStudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
