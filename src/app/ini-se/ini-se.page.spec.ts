import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IniSePage } from './ini-se.page';

describe('IniSePage', () => {
  let component: IniSePage;
  let fixture: ComponentFixture<IniSePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IniSePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
