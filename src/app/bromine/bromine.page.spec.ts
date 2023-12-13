import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrominePage } from './bromine.page';

describe('BrominePage', () => {
  let component: BrominePage;
  let fixture: ComponentFixture<BrominePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BrominePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
