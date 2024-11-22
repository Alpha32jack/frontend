import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-personaje-inve',
  templateUrl: './personaje-inve.page.html',
  styleUrls: ['./personaje-inve.page.scss'],
})
export class PersonajeInvePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  goBack() { 
    this.navCtrl.navigateForward('/camp-onl'); // Cambia la ruta según sea necesario
  }
  gohist() {
    this.navCtrl.navigateForward('/historial');
  }
  Esta(){
    this.navCtrl.navigateForward("/personaje");
  }
  habi(){
    this.navCtrl.navigateForward("/personaje-ha");
  }
  campa(){
    console.log("paso a campaña onlyne");
    this.navCtrl.navigateForward('/camp-onl'); 
  }
  Confg(){
    this.navCtrl.navigateForward('/config'); // Cambia la ruta según sea necesario
  }
}
