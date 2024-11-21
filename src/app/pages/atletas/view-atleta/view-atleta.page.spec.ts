import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewAtletaPage } from './view-atleta.page';

describe('ViewAtletaPage', () => {
  let component: ViewAtletaPage;
  let fixture: ComponentFixture<ViewAtletaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAtletaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
