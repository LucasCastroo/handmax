import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewTreinoPage } from './view-treino.page';

describe('ViewTreinoPage', () => {
  let component: ViewTreinoPage;
  let fixture: ComponentFixture<ViewTreinoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTreinoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
