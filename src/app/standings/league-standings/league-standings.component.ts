import { Component, OnInit } from '@angular/core';
import { StandingsService } from '../../services/standings.service';
import { Routes, RouterModule, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-league-standings',
  templateUrl: './league-standings.component.html',
  styleUrls: ['./league-standings.component.css']
})
export class LeagueStandingsComponent implements OnInit {

  standings = [];

  constructor(private standingsService: StandingsService) { }

  ngOnInit() {
    this.standingsService.getLeagueStandingsData().subscribe((res:any) => {
        this.standings = res;
    });
    console.log(this.standings)
  }

}
