import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PotassiumPage } from './potassium.page';

describe('PotassiumPage', () => {
  let component: PotassiumPage;
  let fixture: ComponentFixture<PotassiumPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PotassiumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
