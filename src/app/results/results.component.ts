import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router} from '@angular/router';
import { ApplicationService } from '../application.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {


  plansArray: any = [];
  days: number;
  adults: number;
  children: number;
  date: string;
  detail: boolean = false;
  urlParse: string

  constructor(
  		public  _router : Router,
  		public route: ActivatedRoute,
  		private app: ApplicationService,
  ) { }

  ngOnInit() {
  	this.getPlans()  		
  }

  getPlans(){
  	this.days = parseInt(this.route.snapshot.paramMap.get('days'))
  	this.adults = parseInt(this.route.snapshot.paramMap.get('adults'))
  	this.children = parseInt(this.route.snapshot.paramMap.get('children'))
  	this.date = this.route.snapshot.paramMap.get('fecha')

  	this.app.getPlans(this.days,this.adults,this.children,this.date).subscribe((plans : any[]) =>{
      if(plans.length == 0){
          this.plansArray = [{message: 'No hay planes disponibles para las fechas seleccionadas. Intenta con una nueva Búsqueda!'}]
      }else{
        this.plansArray = plans
      }
  	}, error =>{
        console.log(error)
        let err = JSON.parse(error)
        let url = "/web/disney/" + err.text + "/" + err.status
        this._router.navigate([]).then(result => {  window.open(url, '_blank'); });
    })
  }
  
  parseUrl(plan){
  	this.urlParse = JSON.stringify(plan)
  }

  close(){
    window.close()
  }


}
