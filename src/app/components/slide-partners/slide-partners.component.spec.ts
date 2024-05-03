import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidePartnersComponent } from './slide-partners.component';

describe('SlidePartnersComponent', () => {
  let component: SlidePartnersComponent;
  let fixture: ComponentFixture<SlidePartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlidePartnersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SlidePartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
