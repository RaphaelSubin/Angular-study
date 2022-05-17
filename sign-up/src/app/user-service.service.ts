import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable , Subject} from 'rxjs'
import {tap} from 'rxjs/operators'; 
@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  httpOptions = new HttpHeaders({
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImZpcnN0TmFtZSI6InN1Ymlubm5uIiwibGFzdE5hbWUiOiJ2aWp1IiwiZW1haWwiOiJzdWJpbkB0ZXN0IiwicGhvbmVObyI6IjkzNzY5MjgyIiwicGFzc3dvcmQiOiJhc2QxMjMiLCJpYXQiOjE2NDg2NDI4NzMsImV4cCI6MTY4MDIwMDQ3M30.oHC2d-wlCbFbJMxeIC3WDvMVXykkKDBrWLwzOxLxPww',
  });

  constructor(private http: HttpClient) {}

    private refreshData = new Subject<void>();

    get refreshDataNeeded(){
      return this.refreshData
    }

  addUser(data: any = '') {
    console.log(data);
    return this.http.post('http://localhost:3000/api/sign-up', data);
  }

  getData() {
    return this.http.get('http://localhost:3000/api/getData');
  }

  login(data: any = '') {
    return this.http.post('http://localhost:3000/api/login', data);
  }

  getUserData():Observable<any> {
    return this.http.get('http://localhost:3000/api/secret-data', {
      headers: this.httpOptions,
    });
  }
  

  updateData(data:any=''):Observable<any>{
    console.log(data);
    return this.http.put(`http://localhost:3000/api/update-data`,data)
    .pipe(tap(() => {
      this.refreshData.next()
    }))
  }


}
