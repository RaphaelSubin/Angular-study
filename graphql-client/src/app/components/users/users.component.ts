import { Component, OnInit , OnDestroy } from '@angular/core';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit  {
  users: any = [];
  loading : boolean;
  error: any;
  userQuery : QueryRef<any>

  private querySubscriptionService: Subscription

  constructor(
    private apollo: Apollo,
    private router: Router,
    private modalService: NgbModal,
  ) {}

  userUpdateForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
  });

  userDeleteForm = new FormGroup({
    id: new FormControl(''),
  });

  ngOnInit(): void {
    const query = gql`
      query getUsers {
        getUsers {
          id
          name
          username
          email
        }
      }
    `;
      this.userQuery =  this.apollo
      .watchQuery<any>({
        query,
      });
      this.querySubscriptionService = this.userQuery.valueChanges.subscribe((result: any) => {
        console.log(result);

        this.users = result?.data?.getUsers;
        this.loading = result.loading;
        this.error = result.error;
      });

      
  }
  refresh(){
    this.userQuery.refetch()
  }

  // ngOnDestroy() {
  //   this.querySubscription.unsubscribe();
  // }
  

  updatePopUp(content: any, user: any) {
    this.modalService.open(content, { ariaLabelledBy: 'heading' });

    this.userUpdateForm.patchValue({ ...user });
  }

  signUp() {
    this.router.navigate(['registration']);
  }

  userUpdateData(data: any) {
    const userUpdateQuery = gql`
      mutation updateUserData(
        $id: Int!
        $name: String!
        $username: String!
        $email: String!
      ) {
        updateUserData(
          id: $id
          name: $name
          username: $username
          email: $email
        ) {
          message
        }
      }
    `;
     this.apollo
      .mutate({
        mutation: userUpdateQuery,
        variables: {
          id: +this.userUpdateForm.value.id,
          name: this.userUpdateForm.value.name,
          username: this.userUpdateForm.value.username,
          email: this.userUpdateForm.value.email,
        },
      })
      .subscribe((result) => {
        this.users = result?.data;
        this.userQuery.refetch()
      });
  }

  deletePopUp(contentDetails: any, user: any) {
    this.modalService.open(contentDetails, { ariaLabelledBy: 'heading' })

    this.userDeleteForm.patchValue({ 
      id: user.id,
      name : user.name,
      username: user.username,
      email:user.email
    });
  }

  userDeleteData(data: any) {
    const userDeleteQuery = gql`
      mutation deleteUserData($id: Int!) {
        deleteUserData(id: $id) {
          message
        }
      }
    `;
    this.apollo
      .mutate({
        mutation: userDeleteQuery,
        variables: {
          id: +this.userDeleteForm.value.id,
        },
      })
      .subscribe((result) => {
        console.log(result);
        this.refresh();
      });
  }
}
