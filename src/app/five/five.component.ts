import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-five',
  templateUrl: './five.component.html',
  styleUrls: ['./five.component.css']
})
export class FiveComponent implements OnInit{
  loginForm : FormGroup | any;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      user:new FormControl('',[Validators.required,Validators.email]),
      pass: new FormControl('',[Validators.required,Validators.minLength(5)] )
    })
  }


  onSubmit(){
    console.log(this.loginForm.value);
    
  }
  // get user(){
  //   return this.loginForm.get('user')
  // }

  // get pass(){
  //   return this.loginForm.get('pass')
  // }
}
