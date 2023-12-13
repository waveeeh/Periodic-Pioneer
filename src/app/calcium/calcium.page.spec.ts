import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalciumPage } from './calcium.page';

describe('CalciumPage', () => {
  let component: CalciumPage;
  let fixture: ComponentFixture<CalciumPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CalciumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
