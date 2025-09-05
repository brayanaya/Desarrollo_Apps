import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-titulo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})
export class TituloComponent {
  titulo = 'Brayan Aya';   // 👈 empieza en Brayan Aya
  cambiado = false;

  cambiarTitulo() {
    if (this.cambiado) {
      this.titulo = 'Brayan Aya';
    } else {
      this.titulo = 'ChatGPT';
    }
    this.cambiado = !this.cambiado;
  }
}
