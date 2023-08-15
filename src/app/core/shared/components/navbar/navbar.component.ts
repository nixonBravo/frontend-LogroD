import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import 'bootstrap'
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/public/services/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navbarOpen = true; // Variable para controlar la apertura del menú
  user!:any
  constructor(private authService:AuthService,private route:Router,private toastService:ToastrService){
    this.authService.userInformation().subscribe((data)=>{
      this.user=data.User;
    })
  }

  ngOnInit(): void {
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen; // Cambia el estado del menú
  }
}
