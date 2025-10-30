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
  IonSearchbar,
  IonList,
  IonListHeader,
  IonItem,
  IonLabel
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
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
    IonSearchbar,
    IonList,
    IonListHeader,
    IonItem,
    IonLabel
  ]
})
export class SearchbarPage {
  searchText1: string = '';
  searchText2: string = '';
  searchText3: string = '';
  searchText4: string = '';
  searchText5: string = '';
  searchText6: string = '';

  items: string[] = [
    'Apple', 'Banana', 'Cherry', 'Date', 'Elderberry',
    'Fig', 'Grape', 'Honeydew', 'Kiwi', 'Lemon',
    'Mango', 'Nectarine', 'Orange', 'Papaya', 'Quince'
  ];
  
  filteredItems: string[] = [];

  constructor() {
    this.filteredItems = [...this.items];
  }

  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    this.filteredItems = this.items.filter(item => 
      item.toLowerCase().includes(query)
    );
  }

  handleCancel() {
    console.log('Search cancelled');
    this.filteredItems = [...this.items];
  }

  handleDebouncedInput(event: any) {
    console.log('Debounced input:', event.target.value);
  }
}