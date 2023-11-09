import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'; // Importe correcto para AngularFireAuth
import firebase from 'firebase/compat/app'; // Importe correcto de firebase
import 'firebase/compat/auth'; // Asegurarse de importar el módulo de autenticación

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { } // Inyección del AngularFireAuth

  // Registro con correo electrónico y contraseña
  async registerWithEmail(email: string, password: string): Promise<firebase.auth.UserCredential> {
    try {
      return await this.afAuth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      // Manejo de errores, como mostrar un mensaje al usuario
      throw error;
    }
  }

  async loginWithEmail(email: string, password: string): Promise<firebase.auth.UserCredential> {
    try {
      return await this.afAuth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      // Manejo de errores
      throw error;
    }
  }

  // Autenticación con Google
  async signInWithGoogle(): Promise<firebase.auth.UserCredential> {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      return await this.afAuth.signInWithPopup(provider);
    } catch (error) {
      // Manejo de errores
      throw error;
    }
  }
}
