import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListatletaPage } from './list-atleta.page';
describe('ListatletaPage', () => {
  let component: ListatletaPage;
  let fixture: ComponentFixture<ListatletaPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListatletaPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ListatletaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
