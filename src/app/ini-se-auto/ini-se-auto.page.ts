import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importamos NavController 


@Component({
  selector: 'app-ini-se-auto',
  templateUrl: './ini-se-auto.page.html',
  styleUrls: ['./ini-se-auto.page.scss'],
})
export class IniSeAutoPage  {

  constructor(private router: Router) { }

  goSi() {
    this.router.navigate(['/ini-se']);
  }

  regis(){
    this.router.navigate(["/registro"])
  }

}
