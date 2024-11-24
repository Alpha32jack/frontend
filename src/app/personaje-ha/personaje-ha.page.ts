import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
@Component({
    selector: 'app-personaje-ha',
    templateUrl: './personaje-ha.page.html',
    styleUrls: ['./personaje-ha.page.scss'],
    standalone: false
})
export class PersonajeHaPage implements OnInit {
  descripcion: string = ""; // El valor inicial de la descripción

  items:string[]=[];
  constructor(private navCtrl: NavController) { }
  ngOnInit() {
    this.generateItems();
  }
  private generateItems() {
    const count = this.items.length + 1;
    for (let i = 0; i < 50; i++) {
      this.items.push(`Nombre jugador # ${count + i}`);
    }
  }
    //MODAL MANA
    isModalOpen_3 = false;

    setOpen_3(isOpen_3: boolean) {
      this.isModalOpen_3 = isOpen_3;
    }
  //MODAL VIDA
  isModalOpen_2 = false;

  setOpen_2(isOpen_2: boolean) {
    this.isModalOpen_2 = isOpen_2;
  }
   // MODAL EXPERIENCIA
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
    // MODAL AFREGAR ITEM
  isModalOpen_4 = false;

  setOpen_4(isOpen_4: boolean) {
    this.isModalOpen_4 = isOpen_4;
  }
  onIonInfinite(ev: InfiniteScrollCustomEvent) {
    this.generateItems();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }
  goBack() { 
    this.navCtrl.navigateForward('/camp-onl'); // Cambia la ruta según sea necesario
  }
  gohist() {
    this.navCtrl.navigateForward('/historial');
  }
  Esta(){
    console.log("va pa la estadisticas");
    this.navCtrl.navigateForward('/personaje'); 
  }
  inven(){
    console.log("va pa la inventario");
    this.navCtrl.navigateForward('/personaje-inve'); 
  }
  campa(){
    console.log("paso a campaña onlyne");
    this.navCtrl.navigateForward('/camp-onl'); 
  }
  Confg(){
    this.navCtrl.navigateForward('/config'); // Cambia la ruta según sea necesario
  }
  Click(){
    console.log("descripcion");
  }

}
