import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-profile',
  templateUrl: './team-profile.component.html',
  styleUrls: ['./team-profile.component.css']
})
export class TeamProfileComponent implements OnInit {

  teamName: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.teamName = this.route.snapshot.params.id;
  }

}
