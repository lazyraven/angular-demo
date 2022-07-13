import { Component } from '@angular/core';
import { UserDataService } from './services/user-data.service'
import { FormControl, FormGroup, Validators } from '@angular/forms'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-demo';
  formDisplay = false
  userList:any;
  constructor(private userDataService: UserDataService) {
    this.getUsers();
  }

  userFormValidation = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
    body: new FormControl('', [Validators.required, Validators.minLength(10)])
  })
  get titleValid() {
    return this.userFormValidation.get('title')
  }
  get body() {
    return this.userFormValidation.get('body')
  }
  toggleForm() {
    this.formDisplay = !this.formDisplay;
  }

  getUsers() {
    this.userDataService.userListData().subscribe((data: any) => {
      console.log("data", data)
      this.userList = data
    })
  }

  getUserFormData(data: any) {
    console.log(data)
    this.userDataService.saveUser(data).subscribe((result: any) => {
      console.log("data post",data, result)
      this.getUsers();
    })
  }
  removeData(id:any){
    console.log("removeData", id)
    this.userList = this.userList.filter((item: any) => item.id !== id);
    this.getUsers()
  }
  
 
}
