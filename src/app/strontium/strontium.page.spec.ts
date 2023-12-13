import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StrontiumPage } from './strontium.page';

describe('StrontiumPage', () => {
  let component: StrontiumPage;
  let fixture: ComponentFixture<StrontiumPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StrontiumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
