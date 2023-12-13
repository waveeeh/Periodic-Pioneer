import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GalliumPage } from './gallium.page';

describe('GalliumPage', () => {
  let component: GalliumPage;
  let fixture: ComponentFixture<GalliumPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GalliumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
