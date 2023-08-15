import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private formBuilder: FormBuilder,private authService:AuthService,private notificacion:ToastrService,private router:Router){
    this.buildForm();
  }
  FormLogin!: FormGroup;
  buildForm() {
    this.FormLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.minLength(8),Validators.maxLength(16)]],
    });
  }
  login(form: any) {
    if (this.FormLogin.invalid) {
      // Marcar los campos del formulario como tocados para mostrar los mensajes de error
      Object.values(this.FormLogin.controls).forEach((control) =>
        control.markAsTouched(),
      );
      return;
    } else {
      console.log('peticion')
      this.authService.login(form).subscribe((data) => {
        this.authService.setToken(data.access_token);
        this.notificacion.success("Inicio de sesión exitoso",'Proceso Exitoso');
        this.router.navigate(['home']);
      });
    }
  }
}
