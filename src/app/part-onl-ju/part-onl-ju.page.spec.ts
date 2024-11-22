import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PartOnlJuPage } from './part-onl-ju.page';

describe('PartOnlJuPage', () => {
  let component: PartOnlJuPage;
  let fixture: ComponentFixture<PartOnlJuPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PartOnlJuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
