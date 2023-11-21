import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavlandingComponent } from './navlanding.component';

describe('NavlandingComponent', () => {
  let component: NavlandingComponent;
  let fixture: ComponentFixture<NavlandingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavlandingComponent]
    });
    fixture = TestBed.createComponent(NavlandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
