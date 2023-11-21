import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodylandingComponent } from './bodylanding.component';

describe('BodylandingComponent', () => {
  let component: BodylandingComponent;
  let fixture: ComponentFixture<BodylandingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodylandingComponent]
    });
    fixture = TestBed.createComponent(BodylandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
