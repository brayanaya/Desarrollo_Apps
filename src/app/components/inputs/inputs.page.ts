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
  IonInput,
  IonTextarea
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.page.html',
  styleUrls: ['./inputs.page.scss'],
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
    IonInput,
    IonTextarea
  ]
})
export class InputsPage {
  textInput: string = '';
  emailInput: string = '';
  passwordInput: string = '';
  numberInput: number = 0;
  telInput: string = '';
  urlInput: string = '';
  textareaInput: string = '';
  clearInput: string = '';

  constructor() {}
}