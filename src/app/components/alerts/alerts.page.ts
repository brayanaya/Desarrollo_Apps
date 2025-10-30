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
  AlertController
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.page.html',
  styleUrls: ['./alerts.page.scss'],
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
export class AlertsPage {
  constructor(private alertController: AlertController) {}

  async presentBasicAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Mensaje importante',
      message: 'Esta es una alerta básica.',
      buttons: ['Aceptar']
    });
    await alert.present();
  }

  async presentConfirmAlert() {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: '¿Estás seguro de que deseas continuar?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            console.log('OK clicked');
          }
        }
      ]
    });
    await alert.present();
  }

  async presentPromptAlert() {
    const alert = await this.alertController.create({
      header: 'Ingresa tu nombre',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Tu nombre'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Aceptar',
          handler: (data) => {
            console.log('Nombre ingresado:', data.name);
          }
        }
      ]
    });
    await alert.present();
  }

  async presentRadioAlert() {
    const alert = await this.alertController.create({
      header: 'Selecciona una opción',
      inputs: [
        {
          label: 'Opción 1',
          type: 'radio',
          value: 'option1',
          checked: true
        },
        {
          label: 'Opción 2',
          type: 'radio',
          value: 'option2'
        },
        {
          label: 'Opción 3',
          type: 'radio',
          value: 'option3'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Aceptar',
          handler: (data) => {
            console.log('Seleccionado:', data);
          }
        }
      ]
    });
    await alert.present();
  }

  async presentCheckboxAlert() {
    const alert = await this.alertController.create({
      header: 'Selecciona opciones',
      inputs: [
        {
          label: 'Casilla 1',
          type: 'checkbox',
          value: 'check1',
          checked: true
        },
        {
          label: 'Casilla 2',
          type: 'checkbox',
          value: 'check2'
        },
        {
          label: 'Casilla 3',
          type: 'checkbox',
          value: 'check3'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Aceptar',
          handler: (data) => {
            console.log('Seleccionado:', data);
          }
        }
      ]
    });
    await alert.present();
  }
}