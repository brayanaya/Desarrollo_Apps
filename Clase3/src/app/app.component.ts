import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';  // 👈 agrega RouterLink
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],  // 👈 agrega RouterLink aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Clase3';
}
