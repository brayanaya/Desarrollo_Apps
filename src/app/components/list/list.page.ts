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
  IonListHeader,
  IonItem,
  IonLabel,
  IonIcon,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonAvatar
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { home, person, settings, create, trash } from 'ionicons/icons';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
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
    IonListHeader,
    IonItem,
    IonLabel,
    IonIcon,
    IonItemSliding,
    IonItemOptions,
    IonItemOption,
    IonAvatar
  ]
})
export class ListPage {
  items = [
    { id: 1, name: 'Slide Item 1' },
    { id: 2, name: 'Slide Item 2' },
    { id: 3, name: 'Slide Item 3' }
  ];

  constructor() {
    addIcons({ home, person, settings, create, trash });
  }

  edit(item: any) {
    console.log('Edit:', item);
    alert('Edit: ' + item.name);
  }

  delete(item: any) {
    console.log('Delete:', item);
    this.items = this.items.filter(i => i.id !== item.id);
  }
}