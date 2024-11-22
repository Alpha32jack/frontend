import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PartOnlPage } from './part-onl.page';

describe('PartOnlPage', () => {
  let component: PartOnlPage;
  let fixture: ComponentFixture<PartOnlPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PartOnlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
