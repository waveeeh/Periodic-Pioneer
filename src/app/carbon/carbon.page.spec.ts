import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarbonPage } from './carbon.page';

describe('CarbonPage', () => {
  let component: CarbonPage;
  let fixture: ComponentFixture<CarbonPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CarbonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
