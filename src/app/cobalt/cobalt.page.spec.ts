import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CobaltPage } from './cobalt.page';

describe('CobaltPage', () => {
  let component: CobaltPage;
  let fixture: ComponentFixture<CobaltPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CobaltPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
