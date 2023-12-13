import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BerylliumPage } from './beryllium.page';

describe('BerylliumPage', () => {
  let component: BerylliumPage;
  let fixture: ComponentFixture<BerylliumPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BerylliumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
