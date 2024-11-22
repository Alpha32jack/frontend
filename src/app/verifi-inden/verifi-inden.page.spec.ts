import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerifiIndenPage } from './verifi-inden.page';

describe('VerifiIndenPage', () => {
  let component: VerifiIndenPage;
  let fixture: ComponentFixture<VerifiIndenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifiIndenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
