import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  url = 'https://jsonplaceholder.typicode.com/posts'

  // url= 'https://reqres.in/api/users'

  // url='https://8f24-2405-201-401a-de67-f94c-8ae9-2080-f7f3.in.ngrok.io/users';

  constructor(private http: HttpClient) { }
  userListData() {
    return this.http.get(this.url)
  }
  saveUser(data:any){
    return this.http.post(this.url, data)
  }
}
