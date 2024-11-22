import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VeriConfirmPage } from './veri-confirm.page';

describe('VeriConfirmPage', () => {
  let component: VeriConfirmPage;
  let fixture: ComponentFixture<VeriConfirmPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VeriConfirmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
