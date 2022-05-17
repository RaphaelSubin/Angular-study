import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  user: any;
  loading: any;
  error: any;

  constructor(private apollo: Apollo) {}

  signUpForm = new FormGroup({
    name: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit(): void {}

  onSubmit(data: any = '') {
    const USER = gql`
      mutation userRegistration(
        $name: String!
        $username: String!
        $email: String!
        $password: String!
      ) {
        userRegistration(
          name: $name
          username: $username
          email: $email
          password: $password
        ) {
          message
          user {
            id
            name
          }
        }
      }
    `;
    this.apollo
      .mutate({
        mutation: USER,
        variables: {
          name: this.signUpForm.value.name,
          username: this.signUpForm.value.username,
          email: this.signUpForm.value.email,
          password: this.signUpForm.value.password,
        },
      })
      .subscribe((result) => {
        console.log(result);
        this.user = result?.data;
        alert('successfully created..');
      });
  }
}
