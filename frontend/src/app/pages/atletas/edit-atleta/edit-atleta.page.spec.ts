import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditAtletaPage } from './edit-atleta.page';

describe('EditAtletaPage', () => {
  let component: EditAtletaPage;
  let fixture: ComponentFixture<EditAtletaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAtletaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
