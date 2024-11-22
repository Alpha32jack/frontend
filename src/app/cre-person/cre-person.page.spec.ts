import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrePersonPage } from './cre-person.page';

describe('CrePersonPage', () => {
  let component: CrePersonPage;
  let fixture: ComponentFixture<CrePersonPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CrePersonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
