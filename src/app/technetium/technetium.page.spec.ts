import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TechnetiumPage } from './technetium.page';

describe('TechnetiumPage', () => {
  let component: TechnetiumPage;
  let fixture: ComponentFixture<TechnetiumPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TechnetiumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
