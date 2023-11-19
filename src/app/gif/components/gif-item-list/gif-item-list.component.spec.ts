import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifItemListComponent } from './gif-item-list.component';

describe('GifItemListComponent', () => {
  let component: GifItemListComponent;
  let fixture: ComponentFixture<GifItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GifItemListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GifItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
