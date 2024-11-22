import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IniSeAutoPage } from './ini-se-auto.page';

describe('IniSeAutoPage', () => {
  let component: IniSeAutoPage;
  let fixture: ComponentFixture<IniSeAutoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IniSeAutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
