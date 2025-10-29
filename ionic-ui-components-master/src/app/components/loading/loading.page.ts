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
  IonSpinner,
  LoadingController
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
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
    IonCardContent,
    IonSpinner
  ]
})
export class LoadingPage {
  constructor(private loadingController: LoadingController) {}

  async showBasicLoading() {
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    await loading.present();
    
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }

  async showLoadingWithMessage() {
    const loading = await this.loadingController.create({
      message: 'Please wait while we process your request...',
      spinner: 'circles'
    });
    await loading.present();
    
    setTimeout(() => {
      loading.dismiss();
    }, 3000);
  }

  async showLoadingWithDuration() {
    const loading = await this.loadingController.create({
      message: 'Loading with 3 second duration',
      duration: 3000
    });
    await loading.present();
  }

  async showLoadingWithBackdrop() {
    const loading = await this.loadingController.create({
      message: 'Loading without backdrop',
      backdropDismiss: true,
      showBackdrop: false
    });
    await loading.present();
    
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }

  async showCustomSpinner() {
    const loading = await this.loadingController.create({
      message: 'Custom crescent spinner',
      spinner: 'crescent',
      cssClass: 'custom-loading'
    });
    await loading.present();
    
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }
}