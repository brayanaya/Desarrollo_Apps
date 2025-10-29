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
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonIcon
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { list, grid, map, camera, bookmark, heart } from 'ionicons/icons';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
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
    IonSegment,
    IonSegmentButton,
    IonLabel,
    IonIcon
  ]
})
export class SegmentPage {
  selectedSegment: string = 'friends';
  selectedView: string = 'list';
  selectedColor: string = 'camera';
  selectedMode: string = 'ios';

  constructor() {
    addIcons({ list, grid, map, camera, bookmark, heart });
  }
}