import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PalladiumPage } from './palladium.page';

describe('PalladiumPage', () => {
  let component: PalladiumPage;
  let fixture: ComponentFixture<PalladiumPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PalladiumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
