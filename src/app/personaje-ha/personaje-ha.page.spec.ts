import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonajeHaPage } from './personaje-ha.page';

describe('PersonajeHaPage', () => {
  let component: PersonajeHaPage;
  let fixture: ComponentFixture<PersonajeHaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonajeHaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
