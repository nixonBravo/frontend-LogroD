import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { AuthInterceptorInterceptor } from './core/shared/interceptores/auth.interceptor';
import { SpinnerInterceptor } from './core/shared/interceptores/spinners.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { Error203Interceptor } from './core/shared/interceptores/error203.interceptor';



@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    ToastrModule.forRoot({
      timeOut: 1500,
      positionClass:'toast-bottom-right'
    }),
    BrowserModule,
    AppRoutingModule,HttpClientModule,CoreModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Error203Interceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
