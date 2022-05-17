import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowPostersComponent } from './row-posters.component';

describe('RowPostersComponent', () => {
  let component: RowPostersComponent;
  let fixture: ComponentFixture<RowPostersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RowPostersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RowPostersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
