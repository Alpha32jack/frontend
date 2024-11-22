import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisPersonPage } from './regis-person.page';

describe('RegisPersonPage', () => {
  let component: RegisPersonPage;
  let fixture: ComponentFixture<RegisPersonPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisPersonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
