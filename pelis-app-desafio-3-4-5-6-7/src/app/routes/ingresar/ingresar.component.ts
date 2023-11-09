import { Component } from '@angular/core';
import { AuthService } from '../../auth.service'; // Ruta actualizada para la importación del servicio


@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css']
})
export class IngresarComponent {
  loginData = { email: '', password: '' };

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.authService.loginWithEmail(this.loginData.email, this.loginData.password)
      .then(result => {
        console.log('Inicio de sesión exitoso', result);
      })
      .catch(error => {
        console.error('Error durante el inicio de sesión', error);
      });
  }

  signInWithGoogle() {
    this.authService.signInWithGoogle()
      .then(result => {
        console.log('Inicio de sesión con Google exitoso', result);
      })
      .catch(error => {
        console.error('Error durante el inicio de sesión con Google', error);
      });
  }
}
