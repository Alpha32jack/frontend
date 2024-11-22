import { Component, ViewChild, ElementRef } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-veri-confirm',
  templateUrl: './veri-confirm.page.html',
  styleUrls: ['./veri-confirm.page.scss'],
})
export class VeriConfirmPage {
  @ViewChild('codeInput0', { static: false }) codeInput0!: ElementRef;
  @ViewChild('codeInput1', { static: false }) codeInput1!: ElementRef;
  @ViewChild('codeInput2', { static: false }) codeInput2!: ElementRef;
  @ViewChild('codeInput3', { static: false }) codeInput3!: ElementRef;
  @ViewChild('codeInput4', { static: false }) codeInput4!: ElementRef;
  @ViewChild('codeInput5', { static: false }) codeInput5!: ElementRef;
  
  code: string[] = ['', '', '', '', '', '']
  timer: number = 60;

  constructor(private toastController: ToastController, private navCtrl: NavController) {
    this.startTimer();
  }

  startTimer() {
    const interval = setInterval(() => {
      if (this.timer > 0) {
        this.timer--;
      } else {
        clearInterval(interval);
      }
    }, 1000);
  }

  onInputChange(event: any, index: number) {
    const inputValue = event.target.value;

    // Mueve el enfoque al siguiente input si está lleno
    if (inputValue && index < this.code.length - 1) {
      this.moveFocus(index + 1);
    }
  }

  moveFocus(index: number) {
    const inputRefs = [
      this.codeInput0,
      this.codeInput1,
      this.codeInput2,
      this.codeInput3,
      this.codeInput4,
      this.codeInput5,
    ];

    const nextInput = inputRefs[index];
    if (nextInput) {
      nextInput.nativeElement.focus();
    }
  }

  async resendCode() {
    const toast = await this.toastController.create({
      message: 'Código reenviado',
      duration: 2000
    });
    toast.present();
    this.timer = 60; // Reinicia el temporizador
    this.startTimer();
  }

  async confirmCode() {
    const codeInput = this.code.join('');
    if (codeInput.length === 6) {
      const toast = await this.toastController.create({
        message: 'Código confirmado: ' + codeInput,
        duration: 2000
        
      });
      toast.present();
      this.navCtrl.navigateForward('/cam-cont');
    } else {
      const toast = await this.toastController.create({
        message: 'Por favor, completa el código',
        duration: 2000
      });
      toast.present();
    }
  }

  goBack() {
    this.navCtrl.navigateForward('/ini-se');
  }

  formatTime(seconds: number) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  }
}