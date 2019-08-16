import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router} from '@angular/router';
import { ApplicationService } from '../application.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Book } from '../classes/book';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  days: number;
  adults: number;
  children: number;
  date: string;
  plan: any;
  validation: boolean 
  dateValid: boolean = true 
  visitor: {type: string,age: number,gender: string,documentType: {code: string},birthDateValid: boolean,birthDate: string,firstName: string,lastName: string,document: string,email: string};
  visitorIndex: number = undefined;
  submitted: boolean = false
  
  constructor(
  		public  _router : Router,
  		public route: ActivatedRoute,
  		private app: ApplicationService,
      private http: HttpClient,
  ) { }


  ngOnInit() {
  	this.getParams()  		
  }

  model = new Book(undefined, undefined,undefined, {email: undefined, phoneNumber: undefined},{type: undefined,	documentType: {code: undefined},name: undefined,lastName: undefined,customerId: undefined,address: undefined,phoneNumber: undefined},{ip: undefined, agent: undefined},[],[{type: undefined,age: undefined,gender: undefined,documentType: {code: undefined},birthDateValid: false,birthDate: undefined,firstName: undefined,lastName: undefined,document: undefined,email: undefined}])

  getParams(){
  	this.days = parseInt(this.route.snapshot.paramMap.get('days'))
  	this.adults = parseInt(this.route.snapshot.paramMap.get('adults'))
  	this.children = parseInt(this.route.snapshot.paramMap.get('children'))
  	this.date = this.route.snapshot.paramMap.get('fecha')
  	this.plan = JSON.parse(this.route.snapshot.paramMap.get('plan'))
  	this.visitor = {type: undefined,age: undefined,gender: undefined,documentType: {code: undefined},birthDateValid: false,birthDate: undefined,firstName: undefined,lastName: undefined,document: undefined,email: undefined}
  }

  addVisitor(person){
  	console.log(this.visitorIndex)
  	if(this.visitorIndex == undefined){
  		if(this.model.visitors[0].type == undefined){
  			this.model.visitors = [person]
  		}else{
  			this.model.visitors.push(person)
  		}
  		
  	}else{
  		this.model.visitors[this.visitorIndex] = person
  	}
  	this.visitor = {type: undefined,age: undefined,gender: undefined,documentType: {code: undefined},birthDateValid: false,birthDate: undefined,firstName: undefined,lastName: undefined,document: undefined,email: undefined}
  	this.visitorIndex = undefined
  	
  }

  deleteVisitor(i){
  	this.model.visitors.splice(i,1)
  }

  infoVisitor(i){
  	this.visitorIndex = i
  	this.visitor = {type: this.model.visitors[i].type,age: this.model.visitors[i].age,gender: this.model.visitors[i].gender,documentType: {code: this.model.visitors[i].documentType.code},birthDateValid: false,birthDate: this.model.visitors[i].birthDate,firstName: this.model.visitors[i].firstName,lastName: this.model.visitors[i].lastName,document: this.model.visitors[i].document,email: this.model.visitors[i].email}
  }

  validarForm(event){
    console.log(event)
    if(event){
      this.validation = false
    }else{
      this.generateBook()
    }
  }
  birthChange(e){
      if(new Date() < new Date(e)){
         this.dateValid = false
         this.visitor.birthDateValid = false
         this.visitor.age = undefined
      }else{
         this.dateValid = true
         this.visitor.birthDateValid = true
         let hoy = new Date();
         let cumpleanos = new Date(e);
         let edad = hoy.getFullYear() - cumpleanos.getFullYear();
         let m = hoy.getMonth() - cumpleanos.getMonth();

         if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
              edad--;
         }
         this.visitor.age = edad
      }
  }

  generateBook(){
    this.submitted = true
    this.model.planId = this.plan.id
    this.model.departureDate = this.plan.startDate
    this.model.numberOfDays = this.plan.numberOfDays
    this.model.contactInformation.email = "talento@booktofly.com.co"
    this.model.contactInformation.phoneNumber = "1234567890"
    this.model.ipAddress.agent = window.navigator.userAgent
    this.app.getIp().subscribe(ip => {
      this.model.ipAddress.ip = ip
      console.log(this.model)
      this.app.generateBook(this.model).subscribe(confirm =>{
        this.submitted = false
        console.log(confirm)
      }, error =>{
          this.submitted = false
          console.log(error)
          let err = JSON.parse(error)
          let url = "/web/disney/error/" + err.text + "/" + err.status
          this._router.navigate([]).then(result => {  window.open(url, '_blank'); });
      })
    })
  }
  

}
