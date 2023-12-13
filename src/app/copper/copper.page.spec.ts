import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CopperPage } from './copper.page';

describe('CopperPage', () => {
  let component: CopperPage;
  let fixture: ComponentFixture<CopperPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CopperPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
