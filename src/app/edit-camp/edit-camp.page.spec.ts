import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditCampPage } from './edit-camp.page';

describe('EditCampPage', () => {
  let component: EditCampPage;
  let fixture: ComponentFixture<EditCampPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCampPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
