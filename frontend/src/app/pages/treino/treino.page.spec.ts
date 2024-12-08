import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TreinoPage } from './treino.page';

describe('TreinoPage', () => {
  let component: TreinoPage;
  let fixture: ComponentFixture<TreinoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TreinoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
