import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScandiumPage } from './scandium.page';

describe('ScandiumPage', () => {
  let component: ScandiumPage;
  let fixture: ComponentFixture<ScandiumPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ScandiumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
