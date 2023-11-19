import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifItemCardComponent } from './gif-item-card.component';

describe('GifItemCardComponent', () => {
  let component: GifItemCardComponent;
  let fixture: ComponentFixture<GifItemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GifItemCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GifItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
