import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaInfoComponent } from './pagina-info.component';

describe('PaginaInfoComponent', () => {
  let component: PaginaInfoComponent;
  let fixture: ComponentFixture<PaginaInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
