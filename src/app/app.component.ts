import { Component } from '@angular/core';
import { UserDataService } from './services/user-data.service'
import { NgForm } from '@angular/forms';
// import { FormControl, FormGroup, Validators } from '@angular/forms'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-demo';
  formDisplay = true
  toggleForm() {
    this.formDisplay = !this.formDisplay;
  }

  userList:any;
  constructor(private userDetail: UserDataService) {
    console.log("userInfo", userDetail, userDetail.userListData())
    this.userDetail.userListData().subscribe((data: any) => {
      console.log("data", data)
      this.userList = data
    })
  }

  getUserFormData(data: any) {
    console.log(data)
    this.userDetail.saveUser(data).subscribe((result: any) => {
      console.log("data post",data, result)
    })
  }
  
  // userFormData = new FormGroup({
  //   title: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
  //   body: new FormControl('', [Validators.required, Validators.minLength(100)])
  // })
}
