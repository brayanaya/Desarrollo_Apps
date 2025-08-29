import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true, // <--- IMPORTANTE
  imports: [FormsModule, CommonModule], // <--- IMPORTANTE
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'lista de compras clase 2';
  producto = '';
  lista: string[] = [];

  agregar() {
    if (this.producto === '') {
      return;
    }
    this.lista.push(this.producto);
    this.producto = '';
  }

  eliminar(i: number) {
    this.lista.splice(i, 1);
  }
}
