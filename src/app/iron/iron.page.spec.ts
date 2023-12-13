import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IronPage } from './iron.page';

describe('IronPage', () => {
  let component: IronPage;
  let fixture: ComponentFixture<IronPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IronPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
