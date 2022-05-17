import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  auth:any
  userDetails:any

  
  constructor(private user:UserServiceService, private router:Router) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  })

  get email(){
    return this.loginForm.get('email')
  }

  get password(){
    return this.loginForm.get('password')
  }


 

  loginSubmit(data:any=''){
    this.loginForm.markAllAsTouched();
    this.user.login(data).subscribe((result:any) => {
      console.warn(result);
      this.auth = result.data.token
      console.log(this.auth);
      
      const data_toStore = JSON.stringify(result);
      localStorage.setItem('loginData',data_toStore);
      alert('success')
      this.router.navigate(['dashboard'])  
    })
        
  }

}
