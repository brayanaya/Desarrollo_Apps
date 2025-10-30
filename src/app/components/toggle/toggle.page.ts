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
  IonList,
  IonListHeader,
  IonItem,
  IonLabel,
  IonToggle
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.page.html',
  styleUrls: ['./toggle.page.scss'],
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
    IonList,
    IonListHeader,
    IonItem,
    IonLabel,
    IonToggle
  ]
})
export class TogglePage {
  toggle1: boolean = false;
  toggle2: boolean = true;
  toggle3: boolean = false;
  toggle4: boolean = false;
  toggle5: boolean = false;
  toggle6: boolean = false;
  toggle7: boolean = true;
  
  darkMode: boolean = false;
  notifications: boolean = true;
  autoSync: boolean = false;
  wifiOnly: boolean = false;
  
  featureX: boolean = false;
  location: boolean = false;
  backgroundRefresh: boolean = false;

  constructor() {}
}