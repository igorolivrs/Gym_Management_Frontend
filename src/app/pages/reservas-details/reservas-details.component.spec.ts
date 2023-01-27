import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservasDetailsComponent } from './reservas-details.component';

describe('ReservasDetailsComponent', () => {
  let component: ReservasDetailsComponent;
  let fixture: ComponentFixture<ReservasDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservasDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservasDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
