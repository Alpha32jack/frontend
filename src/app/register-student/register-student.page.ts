import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.page.html',
  styleUrls: ['./register-student.page.scss'],
})
export class RegisterStudentPage {
  student: any = {
    name: '',
    email: '',
    phone: '',
    language: ''
  };
  toastMessage: string = '';

  constructor(
    private service: ServiceService,
    private toastController: ToastController
  ) {}

  async onSubmit() {
    this.service.createStudent(this.student).subscribe({
      next: (response) => {
        this.presentToast('Usuario registrado exitosamente');
        this.student = { name: '', email: '', phone: '', language: '' }; // Limpiar el formulario
      },
      error: (err) => {
        console.error(err);
        this.presentToast('Error al registrar el usuario');
      },
    });
  }

  async presentToast(message: string) {
    this.toastMessage = message;
  }
}
