import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearCampPage } from './crear-camp.page';

describe('CrearCampPage', () => {
  let component: CrearCampPage;
  let fixture: ComponentFixture<CrearCampPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCampPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
