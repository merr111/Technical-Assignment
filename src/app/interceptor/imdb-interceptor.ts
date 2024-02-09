import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ImdbInterceptor implements HttpInterceptor {
  private rapidApiKey = 'c6b5ac88f7msh192c3d2e63a0e92p17799djsn375994122d42'; 

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const modifiedReq = request.clone({
      setHeaders: {
        'X-RapidAPI-Key': this.rapidApiKey
      }
    });

    
    return next.handle(modifiedReq); 
  }
}
