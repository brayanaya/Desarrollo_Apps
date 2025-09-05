import { Routes } from '@angular/router';
import { SumaComponent } from './suma/suma.component';
import { TituloComponent } from './titulo/titulo.component';
import { ComprasComponent } from './compras/compras.component';

export const routes: Routes = [
  { path: 'suma', component: SumaComponent },
  { path: 'titulo', component: TituloComponent },
  { path: 'compras', component: ComprasComponent },
  { path: '', redirectTo: 'suma', pathMatch: 'full' }
];
