import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FluorinePage } from './fluorine.page';

describe('FluorinePage', () => {
  let component: FluorinePage;
  let fixture: ComponentFixture<FluorinePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FluorinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
