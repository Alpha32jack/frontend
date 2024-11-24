import { Component } from '@angular/core';
import { NavController } from '@ionic/angular'; // Importamos NavController
import { Router } from '@angular/router';
@Component({
    selector: 'app-cam-cont',
    templateUrl: './cam-cont.page.html',
    styleUrls: ['./cam-cont.page.scss'],
    standalone: false
})
export class CamContPage  {

  ContraUser_confir:string="";
  ContraUser:string="";

constructor(private navCtrl: NavController, private router: Router) {}


goBack() { 
  this.navCtrl.navigateForward('/ini-se'); // Cambia la ruta según sea necesario
}

inicio_se(){
    //if( this.usuarioadmin===this.username && this.contraseñaAdmin==this.contraUser ){
      //console.log("Bienvenido");
      //}
      //else{
        //console.log("No ingreso");
      //}
  this.navCtrl.navigateForward('/ini-se');
  console.log("iniciar");
}



}

