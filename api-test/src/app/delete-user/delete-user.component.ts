import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss'],
})
export class DeleteUserComponent implements OnInit {
  baseUrl: string = '';
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // this.baseUrl = `http://localhost:3000/api/delete-user`
    this.deleteUser();
  }

  deleteUser(data: any = '') {
    console.log(data);

    this.http
      .delete(`http://localhost:3000/api/delete-user/${data.username}`)
      .subscribe((response) => {
        console.log(response);
      });
  }
}
