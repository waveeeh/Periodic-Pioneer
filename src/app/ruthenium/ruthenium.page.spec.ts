import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RutheniumPage } from './ruthenium.page';

describe('RutheniumPage', () => {
  let component: RutheniumPage;
  let fixture: ComponentFixture<RutheniumPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RutheniumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
