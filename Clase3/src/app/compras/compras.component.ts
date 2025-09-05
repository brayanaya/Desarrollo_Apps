import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-compras',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <h2>Lista de compras</h2>
    <input [(ngModel)]="producto" placeholder="Agregar producto">
    <button (click)="agregarProducto()">Agregar</button>

    <ul>
      <li *ngFor="let p of productos; let i = index">
        {{ p }}
        <button (click)="eliminarProducto(i)">Eliminar</button>
      </li>
    </ul>
  `
})
export class ComprasComponent {
  producto = '';
  productos: string[] = [];

  agregarProducto() {
    if (this.producto.trim()) {
      this.productos.push(this.producto);
      this.producto = '';
    }
  }

  eliminarProducto(i: number) {
    this.productos.splice(i, 1);
  }
}
