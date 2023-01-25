import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AulasDetailsComponent } from './aulas-details.component';

describe('AulasDetailsComponent', () => {
  let component: AulasDetailsComponent;
  let fixture: ComponentFixture<AulasDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AulasDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AulasDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
