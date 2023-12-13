import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SulfurPage } from './sulfur.page';

describe('SulfurPage', () => {
  let component: SulfurPage;
  let fixture: ComponentFixture<SulfurPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SulfurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
