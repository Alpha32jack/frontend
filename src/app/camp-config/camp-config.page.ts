
import { Component, OnInit} from '@angular/core';
import { NavController } from '@ionic/angular';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
    selector: 'app-camp-config',
    templateUrl: './camp-config.page.html',
    styleUrls: ['./camp-config.page.scss'],
    standalone: false
})
export class CampConfigPage implements OnInit {

  items:string[]=[];
  items2:string[]=[];

  constructor(private navCtrl: NavController) {

  }

  ngOnInit() {
    this.generateItems();
    this.generateItems_2();
  }

  private generateItems() {
    const count = this.items.length + 1;
    for (let i = 0; i < 50; i++) {
      this.items.push(`Nombre jugador # ${count + i}`);
    }
  }
  private generateItems_2() {
    const count = this.items.length + 1;
    for (let o = 0; o < 50; o++) {
      this.items.push(`Nombre jugador # ${count + o}`);
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

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }


  inicio_part() {
    this.navCtrl.navigateForward('/part-onl');
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