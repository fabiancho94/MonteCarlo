import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AleatoriosComponent} from './components/aleatorios/aleatorios.component';
import {SimulacionComponent} from './components/simulacion/simulacion.component';

const routes: Routes = [
  {path: 'randomNumbers', component: AleatoriosComponent},
  {path: 'simulation', component: SimulacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
