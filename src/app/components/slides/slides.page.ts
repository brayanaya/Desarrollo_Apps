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
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonIcon
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronBack, chevronForward, rocket, pizza, wine, cafe } from 'ionicons/icons';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
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
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton,
    IonIcon
  ]
})
export class SlidesPage {
  currentSlide: number = 0;
  
  slides = [
    {
      title: 'Slide 1',
      content: 'Welcome to the first slide',
      icon: 'rocket',
      color: '#3880ff'
    },
    {
      title: 'Slide 2',
      content: 'This is the second slide',
      icon: 'pizza',
      color: '#3dc2ff'
    },
    {
      title: 'Slide 3',
      content: 'Third slide content here',
      icon: 'wine',
      color: '#5260ff'
    },
    {
      title: 'Slide 4',
      content: 'Final slide, great job!',
      icon: 'cafe',
      color: '#2dd36f'
    }
  ];

  constructor() {
    addIcons({ chevronBack, chevronForward, rocket, pizza, wine, cafe });
  }

  nextSlide() {
    if (this.currentSlide < this.slides.length - 1) {
      this.currentSlide++;
    }
  }

  previousSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    }
  }
}