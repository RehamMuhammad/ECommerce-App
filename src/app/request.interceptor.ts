import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {LoaderService} from './loader.service'
import{finalize} from "rxjs/operators"

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(private loaderService: LoaderService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loaderService.setLoader(true)
    const updatedRequest = request.clone({
      headers: request.headers.append('loader', 'show'),
    })
    console.log(updatedRequest)
    return next.handle(updatedRequest).pipe(finalize (() =>  this.loaderService.setLoader(false)));
  }
}
