import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroTreinoPage } from './cadastro-treino.page';
describe('CadastroTreinoPage', () => {
  let component: CadastroTreinoPage;
  let fixture: ComponentFixture<CadastroTreinoPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroTreinoPage],
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroTreinoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
