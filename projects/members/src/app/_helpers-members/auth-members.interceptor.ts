import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';

import {TokenStorageMembersService} from '../_services-members/token-storage-members.service';

const TOKEN_HEADER_KEY = 'x-access-token';

@Injectable()
export class AuthMembersInterceptor implements HttpInterceptor {
  constructor(private token: TokenStorageMembersService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let authReq = req;
    const token = this.token.getToken();
    if (token != null) {
      authReq = req.clone({headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token)});
    }
    return next.handle(authReq);
  }
}

export const authInterceptorProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: AuthMembersInterceptor, multi: true}
];
