import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhosphorusPage } from './phosphorus.page';

describe('PhosphorusPage', () => {
  let component: PhosphorusPage;
  let fixture: ComponentFixture<PhosphorusPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PhosphorusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
