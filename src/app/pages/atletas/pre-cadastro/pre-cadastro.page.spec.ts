import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PreCadastroPage } from './pre-cadastro.page';

describe('PreCadastroPage', () => {
  let component: PreCadastroPage;
  let fixture: ComponentFixture<PreCadastroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PreCadastroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
