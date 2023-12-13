import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OxygenPage } from './oxygen.page';

describe('OxygenPage', () => {
  let component: OxygenPage;
  let fixture: ComponentFixture<OxygenPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OxygenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
