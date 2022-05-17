import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  
  constructor(private user: UserServiceService, private router: Router) {}

  ngOnInit(): void {
    
  }

  signUpForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10)
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(10),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNo: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]{10}$'),
      Validators.maxLength(10),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });


  get firstName() {
    return this.signUpForm.get('firstName');
  }
  get lastName() {
    return this.signUpForm.get('lastName');
  }
  get email() {
    return this.signUpForm.get('email');
  }
  get phoneNo() {
    return this.signUpForm.get('phoneNo');
  }
  get password(){
    return this.signUpForm.get('password')
  }

  btnSubmit(data: any = '') {
    this.signUpForm.markAllAsTouched();
    console.log(data)
    this.user.addUser(data).subscribe((result) => {
      console.warn(result);
      alert('Sign-up Successfull')
      this.router.navigate(['login'])
    })
  }
}
