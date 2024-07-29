import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-six',
  templateUrl: './six.component.html',
  styleUrls: ['./six.component.css']
})
export class SixComponent {

  isLoginMode:boolean=true;

  onFormSubmitted(form: NgForm){
    console.log(form.value);
    form.reset();
  }

  onSwitchMode(){

    this.isLoginMode= !this.isLoginMode;
  }
}
