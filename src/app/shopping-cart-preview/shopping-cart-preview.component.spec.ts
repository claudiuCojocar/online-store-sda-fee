import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartPreviewComponent } from './shopping-cart-preview.component';

describe('ShoppingCartPreviewComponent', () => {
  let component: ShoppingCartPreviewComponent;
  let fixture: ComponentFixture<ShoppingCartPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingCartPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
