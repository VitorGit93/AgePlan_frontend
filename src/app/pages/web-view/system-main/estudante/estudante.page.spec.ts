import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { EstudantePage } from './estudante.page';

describe('EstudantePage', () => {
  let component: EstudantePage;
  let fixture: ComponentFixture<EstudantePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EstudantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
