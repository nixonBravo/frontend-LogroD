import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'; // Asegúrate de que la ruta a LoginComponent sea correcta

const routes: Routes = [
  // Otras rutas si las tienes
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }, // Ruta para el componente de inicio de sesión
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

