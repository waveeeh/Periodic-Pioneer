import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZincPage } from './zinc.page';

describe('ZincPage', () => {
  let component: ZincPage;
  let fixture: ComponentFixture<ZincPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ZincPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
