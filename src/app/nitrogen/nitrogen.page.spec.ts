import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NitrogenPage } from './nitrogen.page';

describe('NitrogenPage', () => {
  let component: NitrogenPage;
  let fixture: ComponentFixture<NitrogenPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NitrogenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
