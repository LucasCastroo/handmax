import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteTreinoPage } from './delete-treino.page';

describe('DeleteTreinoPage', () => {
  let component: DeleteTreinoPage;
  let fixture: ComponentFixture<DeleteTreinoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTreinoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
