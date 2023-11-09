import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './routes/inicio/inicio.component';
import { IngresarComponent } from './routes/ingresar/ingresar.component';
import { PeliculasComponent } from './routes/peliculas/peliculas.component';
import { SeriesComponent } from './routes/series/series.component';


const routes: Routes = [
  { path: "Inicio", component: InicioComponent },
  { path: "Ingresar", component: IngresarComponent },
  { path: "Peliculas", component: PeliculasComponent },
  { path: "Series", component: SeriesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
