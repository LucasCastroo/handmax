import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AtletasPage } from './atletas.page';

describe('AtletasPage', () => {
  let component: AtletasPage;
  let fixture: ComponentFixture<AtletasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AtletasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
