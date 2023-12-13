import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RhodiumPage } from './rhodium.page';

describe('RhodiumPage', () => {
  let component: RhodiumPage;
  let fixture: ComponentFixture<RhodiumPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RhodiumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
