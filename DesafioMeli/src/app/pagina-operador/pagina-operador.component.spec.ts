import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaOperadorComponent } from './pagina-operador.component';

describe('PaginaOperadorComponent', () => {
  let component: PaginaOperadorComponent;
  let fixture: ComponentFixture<PaginaOperadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaOperadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaOperadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
