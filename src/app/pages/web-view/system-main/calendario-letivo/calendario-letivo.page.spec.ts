import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { CalendarioLetivoPage } from './calendario-letivo.page';

describe('CalendarioLetivoPage', () => {
  let component: CalendarioLetivoPage;
  let fixture: ComponentFixture<CalendarioLetivoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CalendarioLetivoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
