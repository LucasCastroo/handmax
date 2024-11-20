import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroAtletaPage } from './cadastro-atleta.page';
describe('CadastroAtletaPage', () => {
  let component: CadastroAtletaPage;
  let fixture: ComponentFixture<CadastroAtletaPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroAtletaPage],
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroAtletaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
