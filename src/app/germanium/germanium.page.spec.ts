import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GermaniumPage } from './germanium.page';

describe('GermaniumPage', () => {
  let component: GermaniumPage;
  let fixture: ComponentFixture<GermaniumPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GermaniumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
