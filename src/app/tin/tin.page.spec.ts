import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TinPage } from './tin.page';

describe('TinPage', () => {
  let component: TinPage;
  let fixture: ComponentFixture<TinPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
