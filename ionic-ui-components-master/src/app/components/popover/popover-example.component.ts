import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  PopoverController
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-popover-example',
  template: `
    <ion-content>
      <ion-list *ngIf="showList">
        <ion-item button (click)="dismiss('Option 1')">
          <ion-label>Option 1</ion-label>
        </ion-item>
        <ion-item button (click)="dismiss('Option 2')">
          <ion-label>Option 2</ion-label>
        </ion-item>
        <ion-item button (click)="dismiss('Option 3')">
          <ion-label>Option 3</ion-label>
        </ion-item>
        <ion-item button (click)="dismiss('Option 4')">
          <ion-label>Option 4</ion-label>
        </ion-item>
      </ion-list>
      
      <div *ngIf="!showList" style="padding: 20px;">
        <h3>Popover Content</h3>
        <p>This is a simple popover.</p>
      </div>
    </ion-content>
  `,
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonList,
    IonItem,
    IonLabel
  ]
})
export class PopoverExampleComponent {
  @Input() showList: boolean = false;

  constructor(private popoverController: PopoverController) {}

  dismiss(item?: string) {
    this.popoverController.dismiss({
      item: item
    });
  }
}