import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomsearchComponent } from './customsearch.component';

describe('CustomsearchComponent', () => {
  let component: CustomsearchComponent;
  let fixture: ComponentFixture<CustomsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomsearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
