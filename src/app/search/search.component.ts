import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router} from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthTokenService } from '../auth-token.service';

import { Query } from '../classes/query';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  valid: boolean;

  constructor(
  		public  _router : Router,
  		public route: ActivatedRoute,
  		private _auth: AuthTokenService,
  		public jwtHelper: JwtHelperService
  	) { }

  ngOnInit() {
 		this._auth.getValidationToken()
  }

  model = new Query(undefined, undefined, undefined,undefined)
  
  validarForm(form){
    if(form){
      this.valid = false
    }else{
      let url = '/web/disney/results/'+this.model.days+'-days/'+this.model.adults+'-adults/'+this.model.children+'-children/'+this.model.date
      this._router.navigate([]).then(result => {  window.open(url, '_blank'); });
    }
  }
}
