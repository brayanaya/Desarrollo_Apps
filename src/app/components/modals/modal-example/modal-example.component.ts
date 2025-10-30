import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonButtons,
  IonIcon,
  ModalController
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { close } from 'ionicons/icons';

@Component({
  selector: 'app-modal-example',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ title }}</ion-title>
        <ion-buttons slot="end">
          <ion-button (click)="dismiss()">
            <ion-icon name="close"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <h2>{{ title }}</h2>
      <p>{{ content }}</p>
      
      <div *ngIf="customData">
        <h3>Custom Data:</h3>
        <pre>{{ customData | json }}</pre>
      </div>
      
      <ion-button expand="block" (click)="dismissWithData()">
        Close with Data
      </ion-button>
      
      <ion-button expand="block" color="secondary" (click)="dismiss()">
        Close
      </ion-button>
    </ion-content>
  `,
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonButtons,
    IonIcon
  ]
})
export class ModalExampleComponent {
  @Input() title: string = '';
  @Input() content: string = '';
  @Input() customData: any;

  constructor(private modalController: ModalController) {
    addIcons({ close });
  }

  dismiss() {
    this.modalController.dismiss();
  }

  dismissWithData() {
    this.modalController.dismiss({
      result: 'Data from modal',
      timestamp: new Date().toISOString()
    });
  }
}