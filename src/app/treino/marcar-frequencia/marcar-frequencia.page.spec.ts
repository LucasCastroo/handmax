import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MarcarFrequenciaPage } from './marcar-frequencia.page';

describe('MarcarFrequenciaPage', () => {
  let component: MarcarFrequenciaPage;
  let fixture: ComponentFixture<MarcarFrequenciaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcarFrequenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
