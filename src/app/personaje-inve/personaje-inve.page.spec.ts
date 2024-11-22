import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonajeInvePage } from './personaje-inve.page';

describe('PersonajeInvePage', () => {
  let component: PersonajeInvePage;
  let fixture: ComponentFixture<PersonajeInvePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonajeInvePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
