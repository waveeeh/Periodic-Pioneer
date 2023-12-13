import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RubidiumPage } from './rubidium.page';

describe('RubidiumPage', () => {
  let component: RubidiumPage;
  let fixture: ComponentFixture<RubidiumPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RubidiumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
