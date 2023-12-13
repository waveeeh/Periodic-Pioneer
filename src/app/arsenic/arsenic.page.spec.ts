import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArsenicPage } from './arsenic.page';

describe('ArsenicPage', () => {
  let component: ArsenicPage;
  let fixture: ComponentFixture<ArsenicPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ArsenicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
