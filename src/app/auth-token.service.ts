import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of ,throwError} from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Router} from '@angular/router';

import { HandleErrorService } from './handle-error.service'
import { JwtHelperService } from '@auth0/angular-jwt';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json','Access-Control-Allow-Origin':'*', })
};

@Injectable({
  providedIn: 'root'
})
export class AuthTokenService {

	private urlToken = 'https://demo.booktofly.co/auth/api/auth/agency/token'
	private payload = {
		"agencyId": "Pw7uAcZ2xfeuXCrig",
		"agencyKey":
		"iaP6I5r/9VL+tJRCyV7rAVyEJQhJFurPowrOpcRGLFZK2TN3F6nzuiA24cmtCF52fZnT3ABIaLUyn0hDjekAVA==",
		"clientId": "demo.booktofly.co"
	} 

  	constructor(
  		private http: HttpClient,
		public jwtHelper: JwtHelperService,
		public handle: HandleErrorService,
		public  _router : Router,
  	) { }

  	getToken(){
		return this.http.post(this.urlToken, this.payload)
			.pipe(
	          catchError(this.handle.catch)
	        )
	}

	getValidationToken(){
		
		if(this.jwtHelper.tokenGetter() == undefined || this.jwtHelper.isTokenExpired()){
			this.getToken().subscribe(res => {
				res = " " + res
				localStorage.setItem("token", JSON.stringify(res))
			}, error =>{
		        console.log(error)
		        let err = JSON.parse(error)
		        let url = "/web/disney/" + err.text + "/" + err.status
		        this._router.navigate([]).then(result => {  window.open(url, '_blank'); });
    		})
		}
	}
}
