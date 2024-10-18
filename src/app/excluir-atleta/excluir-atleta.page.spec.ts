import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExcluiratletaPage } from './excluir-atleta.page';
describe('ExcluiratletaPage', () => {
  let component: ExcluiratletaPage;
  let fixture: ComponentFixture<ExcluiratletaPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExcluiratletaPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ExcluiratletaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
