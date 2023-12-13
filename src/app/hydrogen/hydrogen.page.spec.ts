import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HydrogenPage } from './hydrogen.page';

describe('HydrogenPage', () => {
  let component: HydrogenPage;
  let fixture: ComponentFixture<HydrogenPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HydrogenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
