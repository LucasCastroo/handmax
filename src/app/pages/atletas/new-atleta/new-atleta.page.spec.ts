import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewAtletaPage } from './new-atleta.page';

describe('NewAtletaPage', () => {
  let component: NewAtletaPage;
  let fixture: ComponentFixture<NewAtletaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAtletaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
