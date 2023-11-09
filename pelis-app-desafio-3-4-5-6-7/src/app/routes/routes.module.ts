import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { InicioComponent } from './inicio/inicio.component';
import { SeriesComponent } from './series/series.component';
import { IngresarComponent } from './ingresar/ingresar.component';



@NgModule({
  declarations: [
    PeliculasComponent,
    InicioComponent,
    SeriesComponent,
    IngresarComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class RoutesModule { }
