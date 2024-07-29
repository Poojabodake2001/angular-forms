import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NoSpaceValidator } from '../shared/no-space.validator';
import { UniqueEmailValidator } from '../shared/validator/unique-email.validator';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {
  reactFormObj: FormGroup | any;
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    // this.reactFormObj = new FormGroup({
    //   fullName : new FormGroup({
    //     firstName : new FormControl('', Validators.required),
    //     lastName : new FormControl(''),
    //   }),
    //   emailId : new FormControl(null, Validators.required,),
    //   contactNo : new FormControl(null,[Validators.required,Validators.minLength(10)]),
    //   knowLanguages : new FormArray([new FormControl('', Validators.required)])
    // })
    this.reactFormObj = this.fb.group({
      fullName: this.fb.group({
        firstName: this.fb.control('', Validators.required),
        lastName: this.fb.control('')
      }),
      emailId : this.fb.control(null, [Validators.required, NoSpaceValidator.noSpace],
        UniqueEmailValidator.uniqueEmail),
      contactNo: this.fb.control(null, [Validators.required, Validators.minLength(10)]),
      knowLanguages: this.fb.array([new FormControl('', Validators.required)])
    })
  }
  onSubmit() {
    console.log(this.reactFormObj)
    this.reactFormObj.reset()
  }
  addDefaultEmail() {
    this.reactFormObj.patchValue({
      emailId: 'poojabodake5284@gmail.com'
    })
    this.reactFormObj.touched = this.reactFormObj.get('emailId').touched = true;
  }
  setDefaultValues() {
    this.reactFormObj.setValue({
      fullname: {
        firstName: 'Rajesh',
        lastName: 'Bodake',
      },
      emailId: 'rajeshbodake52@gmail.com',
      contactNo: '8080920640'
    })
    this.reactFormObj.touched = this.reactFormObj.get('emailId').touched = true;
  }
  addNewLanguages() {
    this.reactFormObj.get('knowLanguages').push(new FormControl('', Validators.required))
  }
}