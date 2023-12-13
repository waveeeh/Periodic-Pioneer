import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeliumPage } from './helium.page';

describe('HeliumPage', () => {
  let component: HeliumPage;
  let fixture: ComponentFixture<HeliumPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HeliumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
