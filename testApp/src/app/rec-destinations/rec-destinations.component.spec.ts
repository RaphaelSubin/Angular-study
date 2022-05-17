import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecDestinationsComponent } from './rec-destinations.component';

describe('RecDestinationsComponent', () => {
  let component: RecDestinationsComponent;
  let fixture: ComponentFixture<RecDestinationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecDestinationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecDestinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
