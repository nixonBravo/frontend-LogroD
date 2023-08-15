import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/public/services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  user!:any
  constructor(private authService:AuthService,private route:Router,private toastService:ToastrService){
    this.authService.userInformation().subscribe((data)=>{
      this.user=data.User;
    })
  }
  logout(){
    this.authService.logout().subscribe(data=>{
      this.authService.deleteToken();
      this.route.navigate(['/login']);
      this.toastService.success('Has finalizado la sesión');
    });
  }
}
