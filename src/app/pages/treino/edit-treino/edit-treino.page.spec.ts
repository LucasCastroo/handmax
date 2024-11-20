import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditTreinoPage } from './edit-treino.page';

describe('EditTreinoPage', () => {
  let component: EditTreinoPage;
  let fixture: ComponentFixture<EditTreinoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTreinoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
