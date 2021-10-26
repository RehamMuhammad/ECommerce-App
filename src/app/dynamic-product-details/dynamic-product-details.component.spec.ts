import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicProductDetailsComponent } from './dynamic-product-details.component';

describe('DynamicProductDetailsComponent', () => {
  let component: DynamicProductDetailsComponent;
  let fixture: ComponentFixture<DynamicProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicProductDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
