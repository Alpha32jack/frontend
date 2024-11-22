import { Component,ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { NavController } from '@ionic/angular'; // Importamos NavController
@Component({
  selector: 'app-edit-perfil',
  templateUrl: './edit-perfil.page.html',
  styleUrls: ['./edit-perfil.page.scss'],
})
export class EditPerfilPage  {

  User:string="";
  Email:string="";


  @ViewChild('fileInput', { static: false }) fileInput: ElementRef | undefined;
  imagenUrl: SafeUrl | undefined; // Variable para almacenar la URL de la imagen seleccionada

  constructor(private sanitizer: DomSanitizer,private navCtrl: NavController) {}

  ngAfterViewInit() {

  }
  goBack() {
    this.navCtrl.navigateForward('/config');
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
  
  
  

  campa(){
    console.log("paso a campaña onlyne");
    this.navCtrl.navigateForward('/camp-onl'); 
  }

  pers(){
    console.log("paso a personaje");
    this.navCtrl.navigateForward('/cre-person'); 
  }
  Confg(){
    this.navCtrl.navigateForward('/config'); // Cambia la ruta según sea necesario
  }
}
