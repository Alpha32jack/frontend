import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  studentForm: FormGroup;
  imagenUrl: string | null = null;

  constructor(
    private router: Router, // Asegúrate de que el router está correctamente inyectado
    private fb: FormBuilder,
    private studentService: ServiceService,
    private toastController: ToastController
  ) {
    this.studentForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  goBack() {
    // Lógica para regresar a la página anterior
  }

  abrirSelector() {
    document.querySelector<HTMLInputElement>('#fileInput')?.click();
  }

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagenUrl = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  async registerUser() {
    if (this.studentForm.valid) {
      this.studentService.createStudent(this.studentForm.value).subscribe(
        async (response) => {
          const toast = await this.toastController.create({
            message: 'Usuario registrado exitosamente.',
            duration: 2000,
            color: 'success',
          });
          toast.present();

          this.studentForm.reset();

          // Redirigir a /ini-se después del registro exitoso
          this.router.navigate(['/ini-se']);
        },
        async (error) => {
          const toast = await this.toastController.create({
            message: 'Error al registrar usuario.',
            duration: 2000,
            color: 'danger',
          });
          toast.present();
        }
      );
    }
  }
}


