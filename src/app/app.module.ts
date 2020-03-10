import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StandingsComponent } from './standings/standings.component';
import { StandingsService } from './services/standings.service';
import { TeamsService } from './services/teams.service';
import { HttpClientModule } from '@angular/common/http';
import { LeagueStandingsComponent } from './standings/league-standings/league-standings.component';
import { ConferenceStandingsComponent } from './standings/conference-standings/conference-standings.component';
import { DivisionStandingsComponent } from './standings/division-standings/division-standings.component';
import { TeamProfileComponent } from './team-profile/team-profile.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    StandingsComponent,
    LeagueStandingsComponent,
    ConferenceStandingsComponent,
    DivisionStandingsComponent,
    TeamProfileComponent,
    WelcomeComponent,
    ErrorComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    StandingsService,
    TeamsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
