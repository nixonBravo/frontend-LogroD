import { Component, OnInit } from '@angular/core';

import 'bootstrap'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navbarOpen = true; // Variable para controlar la apertura del menú

  constructor() { }

  ngOnInit(): void {
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen; // Cambia el estado del menú
  }
}
