import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewTreinoPage } from './new-treino.page';

describe('NewTreinoPage', () => {
  let component: NewTreinoPage;
  let fixture: ComponentFixture<NewTreinoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTreinoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
