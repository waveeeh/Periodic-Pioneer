import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SodiumPage } from './sodium.page';

describe('SodiumPage', () => {
  let component: SodiumPage;
  let fixture: ComponentFixture<SodiumPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SodiumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
