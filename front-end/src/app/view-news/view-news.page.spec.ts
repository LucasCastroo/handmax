import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewNewsPage } from './view-news.page';

describe('ViewNewsPage', () => {
  let component: ViewNewsPage;
  let fixture: ComponentFixture<ViewNewsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
