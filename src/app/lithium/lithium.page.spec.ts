import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LithiumPage } from './lithium.page';

describe('LithiumPage', () => {
  let component: LithiumPage;
  let fixture: ComponentFixture<LithiumPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LithiumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
