import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrequenciaTreinoPage } from './frequencia-treino.page';

describe('FrequenciaTreinoPage', () => {
  let component: FrequenciaTreinoPage;
  let fixture: ComponentFixture<FrequenciaTreinoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FrequenciaTreinoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
