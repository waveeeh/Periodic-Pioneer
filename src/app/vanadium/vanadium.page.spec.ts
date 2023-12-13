import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VanadiumPage } from './vanadium.page';

describe('VanadiumPage', () => {
  let component: VanadiumPage;
  let fixture: ComponentFixture<VanadiumPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VanadiumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
