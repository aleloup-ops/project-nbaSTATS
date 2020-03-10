import { Component, OnInit } from '@angular/core';
import { StandingsService } from '../../services/standings.service';

enum conference {
  EAST = 0,
  WEST = 1,
}

@Component({
  selector: 'app-conference-standings',
  templateUrl: './conference-standings.component.html',
  styleUrls: ['./conference-standings.component.css']
})
export class ConferenceStandingsComponent implements OnInit {

  standings = [];
  public conference:conference = conference.EAST;

  constructor(private standingsService: StandingsService) { }

  ngOnInit() {
    this.standingsService.getConferenceStandingsData().subscribe((res:any) => {
        this.standings = res;
    });
  }

  toggleWest() {
    this.conference = conference.WEST;
  }

  toggleEast() {
    this.conference = conference.EAST;
  }

}
