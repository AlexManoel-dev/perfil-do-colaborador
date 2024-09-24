import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { delay, map } from 'rxjs';
import { JsonService } from 'src/app/api/json.service';

@Component({
  selector: 'app-collaborator-details',
  templateUrl: './collaborator-details.component.html',
  styleUrl: './collaborator-details.component.scss',
  providers: [JsonService]
})
export class CollaboratorDetailsComponent implements OnInit {
  collaboratorDetails: any[] = [];

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    // this.route.queryParams.subscribe((params) => {
    //   this.collaboratorDetails = params['data'];
    // });

    this.collaboratorDetails = JSON.parse(localStorage.getItem('data') as string);
  }
}
