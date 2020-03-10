import { Component, OnInit } from '@angular/core';
import { StandingsService } from '../../services/standings.service';

enum divisions {
  SOUTHEAST = 0,
  ATLANTIC = 1,
  CENTRAL = 2,
  SOUTHWEST = 3,
  PACIFIC = 4,
  NORTHWEST = 5,
}

@Component({
  selector: 'app-division-standings',
  templateUrl: './division-standings.component.html',
  styleUrls: ['./division-standings.component.css']
})
export class DivisionStandingsComponent implements OnInit {

  standings = [];
  public standing:divisions = divisions.SOUTHEAST;

  constructor(private standingsService: StandingsService) { }

  ngOnInit() {
    this.standingsService.getDivisionStandingsData().subscribe((res:any) => {
        this.standings = res;
    });
  }

  toggleSoutheast() {
    this.standing = divisions.SOUTHEAST;
  }

  toggleCentral() {
    this.standing = divisions.CENTRAL;
  }

  toggleAtlantic() {
    this.standing = divisions.ATLANTIC;
  }

  toggleSouthwest() {
    this.standing = divisions.SOUTHWEST;
  }

  togglePacific() {
    this.standing = divisions.PACIFIC;
  }

  toggleNorthwest() {
    this.standing = divisions.NORTHWEST;
  }

}
