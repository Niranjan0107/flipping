import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sellv2Component } from './sellv2.component';

describe('Sellv2Component', () => {
  let component: Sellv2Component;
  let fixture: ComponentFixture<Sellv2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Sellv2Component]
    });
    fixture = TestBed.createComponent(Sellv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
