import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteAtletaPage } from './delete-atleta.page';

describe('DeleteAtletaPage', () => {
  let component: DeleteAtletaPage;
  let fixture: ComponentFixture<DeleteAtletaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAtletaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
