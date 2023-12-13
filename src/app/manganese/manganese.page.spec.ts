import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManganesePage } from './manganese.page';

describe('ManganesePage', () => {
  let component: ManganesePage;
  let fixture: ComponentFixture<ManganesePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ManganesePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
