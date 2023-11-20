import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudIntercambioComponent } from './solicitud-intercambio.component';

describe('SolicitudIntercambioComponent', () => {
  let component: SolicitudIntercambioComponent;
  let fixture: ComponentFixture<SolicitudIntercambioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolicitudIntercambioComponent]
    });
    fixture = TestBed.createComponent(SolicitudIntercambioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
