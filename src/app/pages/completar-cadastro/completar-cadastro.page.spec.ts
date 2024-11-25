import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompletarCadastroPage } from './completar-cadastro.page';

describe('CompletarCadastroPage', () => {
  let component: CompletarCadastroPage;
  let fixture: ComponentFixture<CompletarCadastroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletarCadastroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
