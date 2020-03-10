import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StandingsService {

  constructor(private httpClient : HttpClient) { }


  getLeagueStandingsData() {
    return this.httpClient.get("http://data.nba.net/data/10s/prod/v1/current/standings_all.json");
  }

  getConferenceStandingsData() {
    return this.httpClient.get("http://data.nba.net/data/10s/prod/v1/current/standings_conference.json");
  }

  getDivisionStandingsData() {
    return this.httpClient.get("http://data.nba.net/data/10s/prod/v1/current/standings_division.json");
  }
}