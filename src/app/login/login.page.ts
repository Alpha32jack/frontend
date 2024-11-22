import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  credentials = {
    email: '',
    password: ''
  };

  errorMessage: string | null = null;

  constructor(private service: ServiceService, private navCtrl: NavController) {}

  onLogin() {
    this.service.login(this.credentials).subscribe(
      (response) => {
        console.log('Login exitoso:', response);
        // Redirigir a la página principal o dashboard
        this.navCtrl.navigateForward('/camp-config');
      },
      (error) => {
        console.error('Error al iniciar sesión:', error);
        this.errorMessage = error.error?.message || 'Error al iniciar sesión';
      }
    );
  }
}
