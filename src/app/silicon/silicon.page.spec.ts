import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SiliconPage } from './silicon.page';

describe('SiliconPage', () => {
  let component: SiliconPage;
  let fixture: ComponentFixture<SiliconPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SiliconPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
