import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatIntercambioComponent } from './chat-intercambio.component';

describe('ChatIntercambioComponent', () => {
  let component: ChatIntercambioComponent;
  let fixture: ComponentFixture<ChatIntercambioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatIntercambioComponent]
    });
    fixture = TestBed.createComponent(ChatIntercambioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

