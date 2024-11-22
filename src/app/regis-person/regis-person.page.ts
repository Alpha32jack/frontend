import { Component,ViewChild, ElementRef } from '@angular/core';
import { NavController } from '@ionic/angular'; // Importamos NavController para la navegación
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-regis-person',
  templateUrl: './regis-person.page.html',
  styleUrls: ['./regis-person.page.scss'],
})
export class RegisPersonPage  {
  User:string="";
  ContraUser:string="";
  Email:string="";
  ContraUserConfir:string="";

  @ViewChild('fileInput', { static: false }) fileInput: ElementRef | undefined;
  imagenUrl: SafeUrl | undefined; // Variable para almacenar la URL de la imagen seleccionada

  constructor(private sanitizer: DomSanitizer,private navCtrl: NavController) {}

  ngAfterViewInit() {

  }
  goBack() {
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
  
  campa(){
    console.log("paso a campaña onlyne");
    this.navCtrl.navigateForward('/camp-onl'); 
  }
  Confg(){
    this.navCtrl.navigateForward('/config'); // Cambia la ruta según sea necesario
  }
}
