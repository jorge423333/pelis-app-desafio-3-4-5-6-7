// Angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Firebase imports
import { AngularFireModule } from '@angular/fire/compat'; // Asegúrese de usar 'compat' si está trabajando con la versión 6 o superior
import { AngularFireAuthModule } from '@angular/fire/compat/auth'; // Mismo caso para 'compat'

// Bootstrap for Angular
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Routing module
import { AppRoutingModule } from './app-routing.module';

// Custom modules
import { LayoutModule } from "./layout/layout.module";
import { SharedModule } from './shared/shared.module';

// Environment
import { environment } from '../environments/environment';

// Root component
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, // Asegúrese de que todos los componentes personalizados estén listados aquí
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    AppRoutingModule,
    LayoutModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), // Inicialización correcta con su configuración de Firebase
    AngularFireAuthModule, // Módulo de autenticación de Firebase
  ],
  providers: [], // Proveedores de servicios si los tiene
  bootstrap: [AppComponent] // Bootstrap del componente raíz
})
export class AppModule { }
