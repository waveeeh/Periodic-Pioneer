import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeleniumPage } from './selenium.page';

describe('SeleniumPage', () => {
  let component: SeleniumPage;
  let fixture: ComponentFixture<SeleniumPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SeleniumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
