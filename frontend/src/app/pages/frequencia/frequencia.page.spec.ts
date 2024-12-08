import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrequenciaPage } from './frequencia.page';

describe('FrequenciaPage', () => {
  let component: FrequenciaPage;
  let fixture: ComponentFixture<FrequenciaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FrequenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
