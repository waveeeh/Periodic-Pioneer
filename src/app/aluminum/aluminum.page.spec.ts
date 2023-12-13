import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AluminumPage } from './aluminum.page';

describe('AluminumPage', () => {
  let component: AluminumPage;
  let fixture: ComponentFixture<AluminumPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AluminumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
