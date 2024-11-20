import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarAtletaPage } from './edit-atleta.page';

describe('EditarAtletaPage', () => {
  let component: EditarAtletaPage;
  let fixture: ComponentFixture<EditarAtletaPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarAtletaPage],
    }).compileComponents();

    fixture = TestBed.createComponent(EditarAtletaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
