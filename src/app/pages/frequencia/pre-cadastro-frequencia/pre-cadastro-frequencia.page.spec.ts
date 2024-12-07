import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PreCadastroFrequenciaPage } from './pre-cadastro-frequencia.page';

describe('PreCadastroFrequenciaPage', () => {
  let component: PreCadastroFrequenciaPage;
  let fixture: ComponentFixture<PreCadastroFrequenciaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PreCadastroFrequenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
