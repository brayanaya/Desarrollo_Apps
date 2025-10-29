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
  IonSelect,
  IonSelectOption
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-select',
  templateUrl: './select.page.html',
  styleUrls: ['./select.page.scss'],
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
    IonSelect,
    IonSelectOption
  ]
})
export class SelectPage {
  singleSelect: string = '';
  multipleSelect: string[] = [];
  actionSheetSelect: string = '';
  alertSelect: string = '';
  popoverSelect: string = 'medium';
  customTextSelect: string = '';
  countrySelect: string = '';

  constructor() {}
}