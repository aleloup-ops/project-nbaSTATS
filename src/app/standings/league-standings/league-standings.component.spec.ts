import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueStandingsComponent } from './league-standings.component';

describe('LeagueStandingsComponent', () => {
  let component: LeagueStandingsComponent;
  let fixture: ComponentFixture<LeagueStandingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeagueStandingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueStandingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
