import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderContenidoComponent } from './header-contenido.component';

describe('HeaderContenidoComponent', () => {
  let component: HeaderContenidoComponent;
  let fixture: ComponentFixture<HeaderContenidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderContenidoComponent]
    });
    fixture = TestBed.createComponent(HeaderContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
