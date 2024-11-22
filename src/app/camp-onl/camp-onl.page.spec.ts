import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CampOnlPage } from './camp-onl.page';

describe('CampOnlPage', () => {
  let component: CampOnlPage;
  let fixture: ComponentFixture<CampOnlPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CampOnlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
