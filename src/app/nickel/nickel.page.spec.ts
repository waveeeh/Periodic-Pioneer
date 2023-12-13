import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NickelPage } from './nickel.page';

describe('NickelPage', () => {
  let component: NickelPage;
  let fixture: ComponentFixture<NickelPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NickelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
