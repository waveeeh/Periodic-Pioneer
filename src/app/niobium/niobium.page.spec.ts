import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NiobiumPage } from './niobium.page';

describe('NiobiumPage', () => {
  let component: NiobiumPage;
  let fixture: ComponentFixture<NiobiumPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NiobiumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
