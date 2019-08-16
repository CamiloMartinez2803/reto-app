import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HandleErrorService {

  constructor() { }

  catch(error){
  	   let errorMessage = '';
	   if (error.error instanceof ErrorEvent) {
	     // client-side error
	     errorMessage = JSON.stringify({status: error.error.status, text: error.error.statusText, message: error.error.message});
	   } else {
	     // server-side error
	     errorMessage = JSON.stringify({status: error.status, text: error.statusText, message: error.message})
	     
	   }
	   return throwError(errorMessage);
  }

}
