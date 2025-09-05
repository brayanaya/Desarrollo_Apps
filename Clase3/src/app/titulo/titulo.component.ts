import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-titulo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>{{ titulo }}</h2>
    <button (click)="cambiarTitulo()">Cambiar título</button>
  `
})
export class TituloComponent {
  tituloOriginal = 'Título original';
  titulo = this.tituloOriginal;
  cambiado = false;

  cambiarTitulo() {
    this.cambiado = !this.cambiado;
    this.titulo = this.cambiado ? 'Título cambiado' : this.tituloOriginal;
  }
}
