import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageswebViewsystemMainbibliotecaPage } from './pagesweb-viewsystem-mainbiblioteca.page';

describe('PageswebViewsystemMainbibliotecaPage', () => {
  let component: PageswebViewsystemMainbibliotecaPage;
  let fixture: ComponentFixture<PageswebViewsystemMainbibliotecaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PageswebViewsystemMainbibliotecaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
