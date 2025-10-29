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
  IonCheckbox
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-checkboxes',
  templateUrl: './checkboxes.page.html',
  styleUrls: ['./checkboxes.page.scss'],
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
    IonCheckbox
  ]
})
export class CheckboxesPage {
  checkbox1 = false;
  checkbox2 = true;
  checkbox3 = false;
  checkbox4 = true;
  checkbox5 = false;
  checkbox6 = false;

  constructor() {}
}