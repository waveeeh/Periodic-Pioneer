import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadmiumPage } from './cadmium.page';

describe('CadmiumPage', () => {
  let component: CadmiumPage;
  let fixture: ComponentFixture<CadmiumPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CadmiumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
