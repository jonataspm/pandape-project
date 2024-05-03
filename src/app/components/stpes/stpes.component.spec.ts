import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StpesComponent } from './stpes.component';

describe('StpesComponent', () => {
  let component: StpesComponent;
  let fixture: ComponentFixture<StpesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StpesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StpesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
