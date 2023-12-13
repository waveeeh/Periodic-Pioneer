import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MagnesiumPage } from './magnesium.page';

describe('MagnesiumPage', () => {
  let component: MagnesiumPage;
  let fixture: ComponentFixture<MagnesiumPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MagnesiumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
