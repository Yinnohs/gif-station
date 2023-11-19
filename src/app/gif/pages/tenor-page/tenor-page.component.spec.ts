import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenorPageComponent } from './tenor-page.component';

describe('TenorPageComponent', () => {
  let component: TenorPageComponent;
  let fixture: ComponentFixture<TenorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TenorPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TenorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
