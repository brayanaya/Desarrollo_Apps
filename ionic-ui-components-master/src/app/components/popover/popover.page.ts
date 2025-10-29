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
  PopoverController
} from '@ionic/angular/standalone';
import { PopoverExampleComponent } from './popover-example.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
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
export class PopoverPage {
  popoverResult: string = '';

  constructor(private popoverController: PopoverController) {}

  async openPopover(event: any) {
    const popover = await this.popoverController.create({
      component: PopoverExampleComponent,
      event: event,
      translucent: true
    });
    await popover.present();
    
    const { data } = await popover.onDidDismiss();
    if (data) {
      this.popoverResult = data.item;
    }
  }

  async openPopoverWithList(event: any) {
    const popover = await this.popoverController.create({
      component: PopoverExampleComponent,
      event: event,
      componentProps: {
        showList: true
      }
    });
    await popover.present();
    
    const { data } = await popover.onDidDismiss();
    if (data) {
      this.popoverResult = data.item;
    }
  }

  async openPopoverAligned(event: any, side: string) {
    const popover = await this.popoverController.create({
      component: PopoverExampleComponent,
      event: event,
      side: side as any
    });
    await popover.present();
  }
}