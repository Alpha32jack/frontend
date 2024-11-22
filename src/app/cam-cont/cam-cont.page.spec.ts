import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CamContPage } from './cam-cont.page';

describe('CamContPage', () => {
  let component: CamContPage;
  let fixture: ComponentFixture<CamContPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CamContPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
