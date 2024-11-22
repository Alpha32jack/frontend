import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
@Component({
  selector: 'app-camp-onl',
  templateUrl: './camp-onl.page.html',
  styleUrls: ['./camp-onl.page.scss'],
})
export class CampOnlPage {
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

  onIonInfinite(ev: InfiniteScrollCustomEvent) {
    this.generateItems();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }
  // Métodos de navegación
  gohist() {
    this.navCtrl.navigateForward('/historial');
  }

  Crea_sal() {
    this.navCtrl.navigateForward('/crear-camp');
  }

  config() {
    console.log("paso a configuraciones");
    this.navCtrl.navigateForward('/config');
  }

  pers() {
    console.log("paso a personaje");
    this.navCtrl.navigateForward('/cre-person');
  }
  Click() {
    console.log("entrar salas");
    this.navCtrl.navigateForward('/cre-person');
  }
}
