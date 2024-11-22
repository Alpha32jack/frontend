import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CampConfigPage } from './camp-config.page';

describe('CampConfigPage', () => {
  let component: CampConfigPage;
  let fixture: ComponentFixture<CampConfigPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CampConfigPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
