import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cre-person',
  templateUrl: './cre-person.page.html',
  styleUrls: ['./cre-person.page.scss'],
})
export class CrePersonPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  CamCont() { 
    this.navCtrl.navigateForward('/regis-person'); // Cambia la ruta según sea necesario
  }
  campa(){
    console.log("paso a campaña onlyne");
    this.navCtrl.navigateForward('/camp-onl'); 
  }
  Confg(){
    this.navCtrl.navigateForward('/config'); // Cambia la ruta según sea necesario
  }

}
