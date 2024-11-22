import { Component,ElementRef,ViewChild } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Navigation } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
})
export class ConfigPage {

  @ViewChild('fileInput', { static: false }) fileInput: ElementRef | undefined;
  imagenUrl: SafeUrl | undefined; // Variable para almacenar la URL de la imagen seleccionada

  constructor(private sanitizer: DomSanitizer, private navCtrl:NavController) { }

  editProfile() {
    console.log('Edit Profile clicked');
    this.navCtrl.navigateForward('/edit-perfil');
  }

  changePassword() {
    console.log('Change Password clicked');
    this.navCtrl.navigateForward('/cam-cont');
  }

  logout() {
    console.log('Logout clicked');
    this.navCtrl.navigateForward('/ini-se-auto');
  }

  campa(){
    console.log("paso a campaña onlyne");
    this.navCtrl.navigateForward('/camp-onl'); 
  }

  pers(){
    console.log("paso a personaje");
      this.navCtrl.navigateForward('/cre-person'); 
  }
  abrirSelector() {
    if (this.fileInput && this.fileInput.nativeElement) {
      this.fileInput.nativeElement.click();
    }
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input?.files?.[0];
    if (file) {
      const objectURL = URL.createObjectURL(file);
      console.log('URL del objeto creado:', objectURL);  // Verifica que la URL se genere correctamente
      this.imagenUrl = this.sanitizer.bypassSecurityTrustUrl(objectURL);
      console.log('Imagen URL segura:', this.imagenUrl);  // Asegúrate de que sea segura
    }
  }
}


