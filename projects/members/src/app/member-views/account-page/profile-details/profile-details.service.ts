import {Injectable} from '@angular/core';
import {Billing} from '../../../model/billing';
import {TokenStorageMembersService} from '../../../_services-members/token-storage-members.service';
import {User} from '../../../model/user';
import {observable, Observable, pipe, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';

const baseUrl = 'http://localhost:8081/api';

const myHeaders = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProfileDetailsService {
  id: any;

  user: User= new User();
  billing: Billing= new Billing();
  errorResponse:HttpErrorResponse;
  token=this.tokenStorageService.getToken();
  constructor(private http: HttpClient, private tokenStorageService: TokenStorageMembersService) {
  }

  newBilling(billing:Billing): Observable<Billing> {
    const url = baseUrl + '/user/add';
    JSON.stringify(billing);
   return this.http.post<Billing>(url,billing, myHeaders);
  }

  setDefaultInfo(id:number){
    const url = baseUrl + 'user/updateInfo';
    return this.http.post(url,id,myHeaders);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }


}
