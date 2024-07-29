import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-four',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.css']
})
export class FourComponent {
  @ViewChild("myForm")myFormObj:any;

  userList:any[]=[];

  onSubmit(){
    console.log(this.myFormObj);

    this.userList.push(this.myFormObj.form.value)

    this.myFormObj.reset()
  }   


  setVal(){
    this.myFormObj.setValue({
      fullname:{
        firtName: 'Pooja',
        lastName: 'Bodake'
      },
      email: 'pooja5284@gmail.com',
      contact: 7720845252
    })
  }

  patchValToEmail(){
    this.myFormObj.form.patchValue({
      email: 'rahi123@gmail.com'
    })
  }
}
