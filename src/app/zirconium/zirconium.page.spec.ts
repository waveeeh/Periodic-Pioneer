import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZirconiumPage } from './zirconium.page';

describe('ZirconiumPage', () => {
  let component: ZirconiumPage;
  let fixture: ComponentFixture<ZirconiumPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ZirconiumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
