import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
@Component({
    selector: 'app-personaje',
    templateUrl: './personaje.page.html',
    styleUrls: ['./personaje.page.scss'],
    standalone: false
})
export class PersonajePage implements OnInit {

  constructor(private navCtrl: NavController) { }
  ngOnInit() {
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
     // MODAL FUERZA
  isModalOpen_4 = false;

  setOpen_4(isOpen_4: boolean) {
    this.isModalOpen_4 = isOpen_4;
  }
    // MODAL DESTREZA
  isModalOpen_5 = false;

  setOpen_5(isOpen_5: boolean) {
    this.isModalOpen_5 = isOpen_5;
  }

  // MODAL CONSTITUCION
  isModalOpen_6 = false;

  setOpen_6(isOpen_6: boolean) {
    this.isModalOpen_6 = isOpen_6;
  }
    // MODAL INTELIGENCIA
  isModalOpen_7 = false;

  setOpen_7(isOpen_7: boolean) {
    this.isModalOpen_7 = isOpen_7;
  }
    // MODAL SABIDURIA
  isModalOpen_8 = false;

  setOpen_8(isOpen_8: boolean) {
    this.isModalOpen_8 = isOpen_8;
  }
    // MODAL APARIENCIA
  isModalOpen_9 = false;

  setOpen_9(isOpen_9: boolean) {
    this.isModalOpen_9 = isOpen_9;
  }
    // MODAL ESTAMINA
  isModalOpen_10 = false;

  setOpen_10(isOpen_10: boolean) {
    this.isModalOpen_10 = isOpen_10;
  }
    // MODAL BALANCE
  isModalOpen_11 = false;

  setOpen_11(isOpen_11: boolean) {
    this.isModalOpen_11 = isOpen_11;
  }
    // MODAL RESISTENCIA
  isModalOpen_12 = false;

  setOpen_12(isOpen_12: boolean) {
    this.isModalOpen_12 = isOpen_12;
  }
    // MODAL CONOCIMIENTO
  isModalOpen_13 = false;

  setOpen_13(isOpen_13: boolean) {
    this.isModalOpen_13 = isOpen_13;
  }
     // MODAL FUERZA DE VOLUNTAD
  isModalOpen_14 = false;

  setOpen_14(isOpen_14: boolean) {
    this.isModalOpen_14 = isOpen_14;
  }
      // MODAL FUERZA DE VOLUNTAD
  isModalOpen_15 = false;

  setOpen_15(isOpen_15: boolean) {
    this.isModalOpen_15 = isOpen_15;
  }
      // MODAL FUERZA DE VOLUNTAD
  isModalOpen_16 = false;

  setOpen_16(isOpen_16: boolean) {
    this.isModalOpen_16 = isOpen_16;
  }
      // MODAL PUNTERIA
  isModalOpen_17 = false;

  setOpen_17(isOpen_17: boolean) {
    this.isModalOpen_17 = isOpen_17;
  }
      // MODAL SALUD
  isModalOpen_18 = false;

  setOpen_18(isOpen_18: boolean) {
    this.isModalOpen_18 = isOpen_18;
  }
    // MODAL LOGICA
  isModalOpen_19 = false;

  setOpen_19(isOpen_19: boolean) {
    this.isModalOpen_19 = isOpen_19;
  }
    // MODAL INTUICION
  isModalOpen_20 = false;

  setOpen_20(isOpen_20: boolean) {
    this.isModalOpen_20 = isOpen_20;
  }
      // MODAL VERBORREA
  isModalOpen_21 = false;

  setOpen_21(isOpen_21: boolean) {
    this.isModalOpen_21 = isOpen_21;
  }
  goBack() { 
    this.navCtrl.navigateForward('/camp-onl'); // Cambia la ruta según sea necesario
  }
  Click() {
    console.log("entrar salas");
  }

  campa(){
    console.log("paso a campaña onlyne");
    this.navCtrl.navigateForward('/camp-onl'); 
  }
  Confg(){
    this.navCtrl.navigateForward('/config'); // Cambia la ruta según sea necesario
  }
  habi(){
    console.log("va pa la habilidad");
    this.navCtrl.navigateForward('/personaje-ha'); // Cambia la ruta según sea necesario
  }
  inven(){
    console.log("va pa la inventario");
    this.navCtrl.navigateForward("/personaje-inve");
  }
  gohist() {
    this.navCtrl.navigateForward('/historial');
  }

}
