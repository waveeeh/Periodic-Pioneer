import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KryptonPage } from './krypton.page';

describe('KryptonPage', () => {
  let component: KryptonPage;
  let fixture: ComponentFixture<KryptonPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(KryptonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
