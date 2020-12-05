import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaVendedorComponent } from './pagina-vendedor.component';

describe('PaginaVendedorComponent', () => {
  let component: PaginaVendedorComponent;
  let fixture: ComponentFixture<PaginaVendedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaVendedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
