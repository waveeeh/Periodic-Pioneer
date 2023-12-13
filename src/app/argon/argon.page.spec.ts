import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArgonPage } from './argon.page';

describe('ArgonPage', () => {
  let component: ArgonPage;
  let fixture: ComponentFixture<ArgonPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ArgonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
