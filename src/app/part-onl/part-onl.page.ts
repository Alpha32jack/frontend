import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-part-onl',
  templateUrl: './part-onl.page.html',
  styleUrls: ['./part-onl.page.scss'],
})
export class PartOnlPage implements OnInit {

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
  goBack() {
    this.navCtrl.navigateForward('/crear-camp');
  }

  goEdit() {
    this.navCtrl.navigateForward('/edit-camp');
  }

  aca_part() {
    this.navCtrl.navigateForward('/camp-onl');
  }

  config() {
    console.log("paso a configuraciones");
    this.navCtrl.navigateForward('/config');
  }

  pers() {
    console.log("paso a personaje");
    this.navCtrl.navigateForward('/cre-person');
  }
}
