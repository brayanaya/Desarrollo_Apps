import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-suma',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <h2>Suma de dos números</h2>
    <input type="number" [(ngModel)]="num1" placeholder="Número 1">
    <input type="number" [(ngModel)]="num2" placeholder="Número 2">
    <button (click)="sumar()">Sumar</button>
    <p *ngIf="resultado !== null">Resultado: {{ resultado }}</p>
  `
})
export class SumaComponent {
  num1: number = 0;
  num2: number = 0;
  resultado: number | null = null;

  sumar() {
    this.resultado = this.num1 + this.num2;
  }
}
