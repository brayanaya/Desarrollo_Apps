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
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  ToastController
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { checkmarkCircle, warning, closeCircle, informationCircle } from 'ionicons/icons';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
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
    IonButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent
  ]
})
export class ToastPage {
  constructor(private toastController: ToastController) {
    addIcons({ checkmarkCircle, warning, closeCircle, informationCircle });
  }

  async showBasicToast() {
    const toast = await this.toastController.create({
      message: 'This is a basic toast message',
      duration: 2000,
      position: 'bottom'
    });
    await toast.present();
  }

  async showToastWithDuration() {
    const toast = await this.toastController.create({
      message: 'This toast will last 5 seconds',
      duration: 5000,
      position: 'bottom'
    });
    await toast.present();
  }

  async showToastWithButton() {
    const toast = await this.toastController.create({
      message: 'Toast with close button',
      position: 'bottom',
      buttons: [
        {
          text: 'Close',
          role: 'cancel'
        }
      ]
    });
    await toast.present();
  }

  async showToastTop() {
    const toast = await this.toastController.create({
      message: 'Toast at the top',
      duration: 2000,
      position: 'top'
    });
    await toast.present();
  }

  async showToastMiddle() {
    const toast = await this.toastController.create({
      message: 'Toast in the middle',
      duration: 2000,
      position: 'middle'
    });
    await toast.present();
  }

  async showSuccessToast() {
    const toast = await this.toastController.create({
      message: 'Success! Operation completed.',
      duration: 2000,
      position: 'bottom',
      color: 'success',
      icon: 'checkmark-circle'
    });
    await toast.present();
  }

  async showWarningToast() {
    const toast = await this.toastController.create({
      message: 'Warning: Please check your input.',
      duration: 3000,
      position: 'bottom',
      color: 'warning',
      icon: 'warning'
    });
    await toast.present();
  }

  async showErrorToast() {
    const toast = await this.toastController.create({
      message: 'Error: Something went wrong!',
      duration: 3000,
      position: 'bottom',
      color: 'danger',
      icon: 'close-circle'
    });
    await toast.present();
  }

  async showToastWithIcon() {
    const toast = await this.toastController.create({
      message: 'Toast with information icon',
      duration: 2000,
      position: 'bottom',
      icon: 'information-circle',
      color: 'primary'
    });
    await toast.present();
  }
}