import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { AleatoriosComponent } from './components/aleatorios/aleatorios.component';
import { SimulacionComponent } from './components/simulacion/simulacion.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AleatoriosComponent,
    SimulacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
