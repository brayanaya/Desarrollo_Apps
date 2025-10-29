import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonFab,
  IonFabButton,
  IonFabList,
  IonIcon
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add, shareSocial, logoFacebook, logoTwitter, logoInstagram } from 'ionicons/icons';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.page.html',
  styleUrls: ['./fab.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonFab,
    IonFabButton,
    IonFabList,
    IonIcon
  ]
})
export class FabPage {
  constructor() {
    addIcons({ add, shareSocial, logoFacebook, logoTwitter, logoInstagram });
  }

  showMessage(message: string) {
    console.log(message);
    alert(message);
  }
}