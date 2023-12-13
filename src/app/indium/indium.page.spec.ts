import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndiumPage } from './indium.page';

describe('IndiumPage', () => {
  let component: IndiumPage;
  let fixture: ComponentFixture<IndiumPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IndiumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
