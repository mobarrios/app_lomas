import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HacerPage } from './hacer.page';

describe('HacerPage', () => {
  let component: HacerPage;
  let fixture: ComponentFixture<HacerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HacerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HacerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
