import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { StandingsComponent } from './standings/standings.component';
import { ErrorComponent } from './error/error.component';
import { TeamProfileComponent } from './team-profile/team-profile.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'teams/:id', component: TeamProfileComponent},
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
