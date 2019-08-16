import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of ,throwError} from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HandleErrorService } from './handle-error.service'

import { Book } from './classes/book';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json','Access-Control-Allow-Origin':'*', })
};

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  private bookUrl = "https://demo.booktofly.co/booking/api/plans/disney/book"

	constructor(
		private http: HttpClient,
    public handle: HandleErrorService,
	) { }

  	getPlans(days: number, adults: number, children: number, date: string){
  		let url = "https://demo.booktofly.co/search/api/plans/disney/availability/"+days+"/"+adults+"/"+children+"/"+ date
  		
  		return this.http.get(url)
        .pipe(
          catchError(this.handle.catch)
        )
  	}

    getIp(){
      return this.http.get("https://api.ipify.org",{responseType: 'text'})
    }

    generateBook(model: Book){
      return this.http.post(this.bookUrl, model)
      .pipe(
        catchError(this.handle.catch)
      )
    }

}
