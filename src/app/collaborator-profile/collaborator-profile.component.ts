import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-collaborator-profile',
  templateUrl: './collaborator-profile.component.html',
  styleUrls: ['./collaborator-profile.component.scss'],
})
export class CollaboratorProfileComponent implements OnInit {
  employeeName!: string;
  jobName!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.employeeName = params['employeeName'];
      this.jobName = params['jobName'];
    });
  }
}
