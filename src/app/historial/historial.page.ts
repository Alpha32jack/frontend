import { Component} from '@angular/core';
import { NavController } from '@ionic/angular';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage{
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
    this.navCtrl.navigateForward('/personaje'); // Cambia la ruta según sea necesario
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
    this.navCtrl.navigateForward('/personaje');
  }
}
