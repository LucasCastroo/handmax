import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewNoticiaPage } from './new-noticia.page';

describe('NewNoticiaPage', () => {
  let component: NewNoticiaPage;
  let fixture: ComponentFixture<NewNoticiaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NewNoticiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
