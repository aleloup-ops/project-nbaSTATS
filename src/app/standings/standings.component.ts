import { Component, OnInit, Input } from '@angular/core';
import { StandingsService } from '../services/standings.service';
import * as $ from 'jquery';

enum standingType {
  LEAGUE = 0,
  CONFERENCE = 1,
  DIVISION = 2,
}

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent implements OnInit {

  standings = [];
  teams = [];
  public standing:standingType = standingType.LEAGUE;

  constructor(private standingsService: StandingsService) { }

  ngOnInit() {
    this.standingsService.getLeagueStandingsData().subscribe((res:any) => {
        this.standings = res;
    });
  }



  toggleLeague() {
    this.standing = standingType.LEAGUE;
  }

  toggleConference() {
    this.standing = standingType.CONFERENCE;
  }

  toggleDivision() {
    this.standing = standingType.DIVISION;
  }

}
