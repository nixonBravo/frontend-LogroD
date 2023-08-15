import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class Error203Interceptor implements HttpInterceptor {
    constructor(private readonly toastsErvice:ToastrService){}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse && event.status === 203) {
          const errorMessage = 'Status 203 received';
          console.log(event.body.message);
          this.toastsErvice.error(event.body.message,'Prcoeso Erroneo!')
          throw new Error(errorMessage);
        }
      })
    );
  }
}
