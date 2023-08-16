import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { VerComponent } from './pages/ver/ver.component';
import { CrearComponent } from './pages/crear/crear.component';
import { EditComponent } from './pages/edit/edit.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [{
      path: '',
      redirectTo:'ver',
      pathMatch: 'full'
    },
      {
        path: 'ver',
      component: VerComponent

      },
      {
        path: 'crear',
      component: CrearComponent

      },
      {
        path: 'edit/:id',
      component: EditComponent

      },


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
