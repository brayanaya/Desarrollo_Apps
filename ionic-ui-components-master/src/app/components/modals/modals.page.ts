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
  ModalController
} from '@ionic/angular/standalone';
import { ModalExampleComponent } from './modal-example/modal-example.component';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.page.html',
  styleUrls: ['./modals.page.scss'],
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
    IonButton
  ]
})
export class ModalsPage {
  modalResult: string = '';

  constructor(private modalController: ModalController) {}

  async openBasicModal() {
    const modal = await this.modalController.create({
      component: ModalExampleComponent,
      componentProps: {
        title: 'Basic Modal',
        content: 'This is a basic modal example'
      }
    });
    await modal.present();
    
    const { data } = await modal.onWillDismiss();
    if (data) {
      this.modalResult = data.result;
    }
  }

  async openModalWithData() {
    const modal = await this.modalController.create({
      component: ModalExampleComponent,
      componentProps: {
        title: 'Modal with Data',
        content: 'This modal received custom data',
        customData: { id: 123, name: 'Test Item' }
      }
    });
    await modal.present();
    
    const { data } = await modal.onWillDismiss();
    if (data) {
      this.modalResult = JSON.stringify(data);
    }
  }

  async openFullscreenModal() {
    const modal = await this.modalController.create({
      component: ModalExampleComponent,
      componentProps: {
        title: 'Fullscreen Modal',
        content: 'This modal is displayed in fullscreen'
      },
      cssClass: 'fullscreen-modal'
    });
    await modal.present();
  }

  async openCardModal() {
    const modal = await this.modalController.create({
      component: ModalExampleComponent,
      componentProps: {
        title: 'Card Modal',
        content: 'This is a card-style modal'
      },
      breakpoints: [0, 0.5, 0.8, 1],
      initialBreakpoint: 0.5
    });
    await modal.present();
  }
}