import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
    selector: 'app-registro',
    templateUrl: './registro.page.html',
    styleUrls: ['./registro.page.scss'],
    standalone: false
})
export class RegistroPage {
  studentForm: FormGroup;
  imagenUrl: string = '';


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
      profile_picture: [[''], Validators.required],
    });
  }

  goBack() {
    // Lógica para regresar a la página anterior
  }

  abrirSelector() {
    document.querySelector<HTMLInputElement>('#fileInput')?.click();
  }

  onFileChange(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput?.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      const reader = new FileReader();
  
      reader.onload = () => {
        this.imagenUrl = reader.result as string; // Save Base64 string
        this.studentForm.patchValue({
          profile_picture: this.imagenUrl, // Update form with Base64 string
        });
      };
  
      reader.readAsDataURL(file); // Convert image to Base64
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


