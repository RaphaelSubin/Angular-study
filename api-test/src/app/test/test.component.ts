import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  httpClient:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.userSignUp();
    
  }


  userSignUp = (data:any = '') => {
    this.http.post('http://localhost:3000/api/sign-up',data).subscribe((result) => {
      console.log(result);
      
    })
  }


 

}
