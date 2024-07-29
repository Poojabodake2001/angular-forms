import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  @ViewChild('myForm') myFormObj: any;

  constructor() { }

  ngOnInit(): void {

  }

  // onSubmit(param : any){
  //   console.log(param)
  // }
  onSubmit() {
    console.log(this.myFormObj)
    this.myFormObj.form.reset();
  }
 
  addDefaultEmail() {
    this.myFormObj.form.patchValue({
      emailId: 'manoj.patil.145@gmail.com'
    })
  }

  setDefaultValues() {
    this.myFormObj.setValue({
      fullName: {
        firstName: 'Prashant',
        lastName: 'Barkale'
      },
      emailId: 'prashant.b@gmail.com',
      contactNo: '9764860556'
    })
  }
}




