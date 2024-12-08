import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditNoticiaPage } from './edit-noticia.page';

describe('EditNoticiaPage', () => {
  let component: EditNoticiaPage;
  let fixture: ComponentFixture<EditNoticiaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNoticiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
