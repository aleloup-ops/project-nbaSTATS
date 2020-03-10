import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private httpClient: HttpClient) { }

  getTeamRoster (team) {
    return this.httpClient.get("http://data.nba.net/data/10s/prod/v1/2019/teams/" + team + "/roster.json");
  }
}
