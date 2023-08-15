import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  formRegister: FormGroup;
  constructor(
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private toastService: ToastrService
  ) {
    this.formRegister = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(15),
        ],
      ],

      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(3)]],

      cedula: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.maxLength(10),
          Validators.minLength(10),
        ],
      ],
    });
  }
  register(value: any) {
    if (this.formRegister.invalid) {
      // Marcar los campos del formulario como tocados para mostrar los mensajes de error
      Object.values(this.formRegister.controls).forEach((control) =>
        control.markAsTouched()
      );
      this.toastService.error('LLenar formulario','Proceso Erroneo')
    } else {
      console.log('peticion');
      this.authService.register(value).subscribe((data) => {
        this.authService.login(value).subscribe((data) => {
          this.authService.setToken(data.access_token);
          this.toastService.success(
            'Inicio de sesión exitoso',
            'Proceso Exitoso'
          );
          this.router.navigate(['home']);
        });
      });
    }
  }
}
