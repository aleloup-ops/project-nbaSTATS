import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceStandingsComponent } from './conference-standings.component';

describe('ConferenceStandingsComponent', () => {
  let component: ConferenceStandingsComponent;
  let fixture: ComponentFixture<ConferenceStandingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConferenceStandingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferenceStandingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
