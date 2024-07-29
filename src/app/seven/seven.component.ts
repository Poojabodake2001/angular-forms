import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-seven',
  templateUrl: './seven.component.html',
  styleUrls: ['./seven.component.css']
})
export class SevenComponent implements OnInit{
 myForm: FormGroup | any;
currentIndex : number= 0;
 ngOnInit(): void {
   this.myForm = new FormGroup({
    name: new FormControl('', Validators.required),
    skills: new FormArray([
      new FormControl('', Validators.required)
    ])
   })
 }
 submitForm(){}

 get skillsArray(){
  return this.myForm.get('skills') as FormArray
 }
 addSkills(index:number){
  this.currentIndex++;
  this.skillsArray.push(new FormControl('', Validators.required))
 }
}
