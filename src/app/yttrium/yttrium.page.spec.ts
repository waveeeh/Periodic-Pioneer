import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YttriumPage } from './yttrium.page';

describe('YttriumPage', () => {
  let component: YttriumPage;
  let fixture: ComponentFixture<YttriumPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(YttriumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
