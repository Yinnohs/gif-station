import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifphyPageComponent } from './gifphy-page.component';

describe('GifphyPageComponent', () => {
  let component: GifphyPageComponent;
  let fixture: ComponentFixture<GifphyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GifphyPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GifphyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
