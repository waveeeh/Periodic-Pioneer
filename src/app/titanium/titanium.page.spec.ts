import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TitaniumPage } from './titanium.page';

describe('TitaniumPage', () => {
  let component: TitaniumPage;
  let fixture: ComponentFixture<TitaniumPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TitaniumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
