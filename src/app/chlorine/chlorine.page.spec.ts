import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChlorinePage } from './chlorine.page';

describe('ChlorinePage', () => {
  let component: ChlorinePage;
  let fixture: ComponentFixture<ChlorinePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChlorinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
