import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  IonApp,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonListHeader,
  IonItem,
  IonIcon,
  IonLabel,
  IonRouterOutlet
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  homeOutline,
  radioButtonOnOutline,
  cardOutline,
  checkboxOutline,
  calendarOutline,
  createOutline,
  listOutline,
  hourglassOutline,
  layersOutline,
  chatboxOutline,
  ellipseOutline,
  optionsOutline,
  searchOutline,
  copyOutline,
  chevronDownOutline,
  imagesOutline,
  tabletLandscapeOutline,
  notificationsOutline,
  toggleOutline,
  alertCircleOutline,
  addCircleOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  styleUrls: ['app.component.scss'],
  imports: [
    CommonModule,
    RouterModule,
    IonApp,
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonListHeader,
    IonItem,
    IonIcon,
    IonLabel,
    IonRouterOutlet
  ]
})
export class AppComponent {
  public componentsList = [
    { title: 'Inicio', url: '/home', icon: 'home' },
    { title: 'Botones', url: '/buttons', icon: 'radio-button-on' },
    { title: 'Listas', url: '/list', icon: 'list' },
    { title: 'Tarjetas', url: '/cards', icon: 'card' },
    { title: 'Entradas', url: '/inputs', icon: 'create' },
    { title: 'Casillas de verificación', url: '/checkboxes', icon: 'checkbox' },
    { title: 'Selección', url: '/select', icon: 'caret-down' },
    { title: 'Rango', url: '/range', icon: 'options' },
    { title: 'Radio', url: '/radio', icon: 'radio-button-on' },
    { title: 'Fecha y hora', url: '/datetime', icon: 'calendar' },
    { title: 'Búsqueda', url: '/searchbar', icon: 'search' },
    { title: 'Segmentos', url: '/segment', icon: 'copy' },
    { title: 'Deslizadores', url: '/slides', icon: 'images' },
    { title: 'Pestañas', url: '/tabs', icon: 'albums' },
    { title: 'FAB (Botón Flotante)', url: '/fab', icon: 'add-circle' },
    { title: 'Alertas', url: '/alerts', icon: 'alert-circle' },
    { title: 'Carga', url: '/loading', icon: 'hourglass' },
    { title: 'Modales', url: '/modals', icon: 'layers' },
    { title: 'Popover', url: '/popover', icon: 'chatbubble-ellipses' },
    { title: 'Toast', url: '/toast', icon: 'notifications' },
    { title: 'Interruptores', url: '/toggle', icon: 'toggle' }
  ];

  constructor() {
    this.registerIcons();
  }

  private registerIcons() {
    addIcons({
      'home-outline': homeOutline,
      'radio-button-on-outline': radioButtonOnOutline,
      'card-outline': cardOutline,
      'checkbox-outline': checkboxOutline,
      'calendar-outline': calendarOutline,
      'create-outline': createOutline,
      'list-outline': listOutline,
      'hourglass-outline': hourglassOutline,
      'layers-outline': layersOutline,
      'chatbox-outline': chatboxOutline,
      'ellipse-outline': ellipseOutline,
      'options-outline': optionsOutline,
      'search-outline': searchOutline,
      'copy-outline': copyOutline,
      'chevron-down-outline': chevronDownOutline,
      'images-outline': imagesOutline,
      'tablet-landscape-outline': tabletLandscapeOutline,
      'notifications-outline': notificationsOutline,
      'toggle-outline': toggleOutline,
      'alert-circle-outline': alertCircleOutline,
      'add-circle-outline': addCircleOutline
    });
  }
}