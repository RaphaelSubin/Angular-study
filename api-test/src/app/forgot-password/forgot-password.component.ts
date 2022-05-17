import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.forgotPassword();
  }


  forgotPassword = (data:any='') => {
    this.http.put('http://localhost:3000/api/password-update',data).subscribe((result) => {
      console.log(result);
      
    })
  }
}
