import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDynamicDetailsComponent } from './product-dynamic-details.component';

describe('ProductDynamicDetailsComponent', () => {
  let component: ProductDynamicDetailsComponent;
  let fixture: ComponentFixture<ProductDynamicDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDynamicDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDynamicDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
