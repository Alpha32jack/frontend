import { Component } from '@angular/core';
import { NavController } from '@ionic/angular'; // Importamos NavController para la navegación
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-verifi-inden',
  templateUrl: './verifi-inden.page.html',
  styleUrls: ['./verifi-inden.page.scss'],
})
export class VerifiIndenPage {
  /* email: string = ''; // Variable para almacenar el correo electrónico

  constructor(private navCtrl: NavController, private authService: ServiceService) {}

  goBack() {
    this.navCtrl.navigateForward('/ini-se'); // Cambia la ruta según sea necesario
  }

  CamCont() {
    // Llamar al servicio para verificar la identidad
    this.authService.verifyIdentity(this.email).subscribe(
      (response) => {
        console.log('Correo enviado con éxito', response);
        this.navCtrl.navigateForward('/veri-confirm'); // Navegar a la página de confirmación
      },
      (error) => {
        console.error('Error al enviar el correo', error);
      }
    );
  } */
}
