import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RelatorioSocialPage } from './relatorio-social.page';

describe('RelatorioSocialPage', () => {
  let component: RelatorioSocialPage;
  let fixture: ComponentFixture<RelatorioSocialPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioSocialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
