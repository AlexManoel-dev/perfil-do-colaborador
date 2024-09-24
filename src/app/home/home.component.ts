import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { JsonService } from '../api/json.service';
import { RandomUserService } from '../api/random-user.service';
import { delay } from 'rxjs';
import { Storage } from '@ionic/storage-angular';
import { StorageService } from '../api/storage.service';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [JsonService, /*StorageService*/ RandomUserService]
})
export class HomeComponent implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name!: string;

  collaboratorDetails: { employeeName: string; jobName: string; } = {} as { employeeName: string; jobName: string; };

  isLoading: boolean = true;

  allData: any;

  randomUser: any;

  constructor(
    private jsonService: JsonService,
    private randomUserService: RandomUserService,
    // @Inject(String) private storage: StorageService
  ) { }  

  ngOnInit(): void {
    this.getJSON();

    setTimeout(() => {
      this.isLoading = false
    }, 5000);
  }

  getJSON(): void {
    this.jsonService.getJSON().subscribe((data) => {
      this.allData = data;
      localStorage.setItem('data', JSON.stringify(this.allData.payload[0].sections));
      console.log('this.allData.payload[0].sections', this.allData.payload[0].sections);
      console.log('allData', this.allData);
      
      this.collaboratorDetails = {
        employeeName: data.payload[0].sections[0].cardItems[0].data.employeeName,
        jobName: data.payload[0].sections[0].cardItems[0].data.jobName
      };
    });
  }

  jsonStringify(value: any): string {
    return JSON.stringify(value);
  }

  getRandomUser(): void {
    this.isLoading = true;
    this.randomUserService.getRandomUser().pipe(
      delay(3000)
    ).subscribe(
      async (response) => {
        this.randomUser = response;
        this.isLoading = false;
        // await this.storage.set('json-data', response);
        this.openModal();
      }
    );
  }

  openModal() {
    this.modal.present();
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }
}
