import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router} from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {



  status: number;
  text: string;
  message: string;

  constructor(
  	public  _router : Router,
  	public route: ActivatedRoute,
  ) { }

  ngOnInit() {
  	this.getParams()
  }


  getParams(){
  	console.log(this.route.snapshot.paramMap.get('text'))
  	this.status = parseInt(this.route.snapshot.paramMap.get('status'))
  	this.text = this.route.snapshot.paramMap.get('text')
  }
}
