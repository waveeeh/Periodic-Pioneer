import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChromiumPage } from './chromium.page';

describe('ChromiumPage', () => {
  let component: ChromiumPage;
  let fixture: ComponentFixture<ChromiumPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChromiumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
