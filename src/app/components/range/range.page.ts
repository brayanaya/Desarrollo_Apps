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
  IonItem,
  IonLabel,
  IonRange,
  IonIcon
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { volumeLow, volumeHigh } from 'ionicons/icons';

@Component({
  selector: 'app-range',
  templateUrl: './range.page.html',
  styleUrls: ['./range.page.scss'],
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
    IonItem,
    IonLabel,
    IonRange,
    IonIcon
  ]
})
export class RangePage {
  basicRange: number = 50;
  volumeRange: number = 50;
  brightnessRange: number = 50;
  colorRange: number = 50;
  temperatureRange: number = 20;
  pinRange: number = 50;
  dualRange: any = { lower: 25, upper: 75 };
  disabledRange: number = 50;

  constructor() {
    addIcons({ volumeLow, volumeHigh });
  }
}