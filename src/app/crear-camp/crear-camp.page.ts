import { Component,ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { NavController } from '@ionic/angular'; // Importamos NavController

@Component({
  selector: 'app-crear-camp',
  templateUrl: './crear-camp.page.html',
  styleUrls: ['./crear-camp.page.scss'],
})
export class CrearCampPage {
  N_camp:string=("");
  ID_camp:string=("");
  constructor(private sanitizer: DomSanitizer,private navCtrl: NavController) { }

  ngOnInit() {
  }
  @ViewChild('fileInput', { static: false }) fileInput: ElementRef | undefined;
  imagenUrl: SafeUrl | undefined; // Variable para almacenar la URL de la imagen seleccionada

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

  Generar_id(){
    console.log("Generar codigo ID");
  }

  campa(){
    console.log("paso a campaña onlyne");

  }

  pers(){
    console.log("paso a personaje");
    this.navCtrl.navigateForward('/cre-person'); 
  }
  campConfg(){
    this.navCtrl.navigateForward('/camp-config'); // Cambia la ruta según sea necesario
  }
  Confg(){
    this.navCtrl.navigateForward('/config'); // Cambia la ruta según sea necesario
  }
  goBack() {
    this.navCtrl.navigateForward('/camp-onl'); // Cambia la ruta según sea necesario
  }
}
