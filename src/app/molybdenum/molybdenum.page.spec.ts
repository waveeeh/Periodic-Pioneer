import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MolybdenumPage } from './molybdenum.page';

describe('MolybdenumPage', () => {
  let component: MolybdenumPage;
  let fixture: ComponentFixture<MolybdenumPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MolybdenumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
