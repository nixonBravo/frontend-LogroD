import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent,
    ProgressBarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,RouterModule

  ],exports:[
    ProgressBarComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
