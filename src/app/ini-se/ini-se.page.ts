import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
    selector: 'app-ini-se',
    templateUrl: './ini-se.page.html',
    styleUrls: ['./ini-se.page.scss'],
    standalone: false
})
export class IniSePage {
  credentials = { email: '', password: '' }; // Credenciales del usuario
  rememberMe: boolean = false; // Estado del "Recordar sesión"
  errorMessage: string | null = null; // Mensaje de error

  constructor(
    private navCtrl: NavController,
    private router: Router,
    private service: ServiceService
  ) {}

  goBack() {
    this.navCtrl.navigateBack('/ini-se-auto');
  }

  
  inicio_se() {
    if (this.credentials.email && this.credentials.password) {
      this.service.login(this.credentials).subscribe(
        (response) => {
          console.log('Login exitoso:', response);

          if (this.rememberMe) {
            localStorage.setItem('userSession', JSON.stringify(response));
          }

          this.router.navigate(['/camp-config']);
        },
        (error) => {
          console.error('Error en la autenticación:', error);
          this.errorMessage = error.error?.message || 'Error al iniciar sesión';
        }
      );
    } else {
      this.errorMessage = 'Por favor, complete los campos correctamente.';
    }
  }

  recu_cont() {
    this.router.navigate(['/registro']);
  }
}
