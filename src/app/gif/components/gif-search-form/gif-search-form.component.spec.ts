import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifSearchFormComponent } from './gif-search-form.component';

describe('GifSearchFormComponent', () => {
  let component: GifSearchFormComponent;
  let fixture: ComponentFixture<GifSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GifSearchFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GifSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
