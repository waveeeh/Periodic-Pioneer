import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BoronPage } from './boron.page';

describe('BoronPage', () => {
  let component: BoronPage;
  let fixture: ComponentFixture<BoronPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BoronPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
