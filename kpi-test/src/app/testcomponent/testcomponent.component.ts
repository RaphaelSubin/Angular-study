import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-testcomponent',
  templateUrl: './testcomponent.component.html',
  styleUrls: ['./testcomponent.component.scss'],
})
export class TestcomponentComponent implements OnInit {
  httpClient: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    console.log('hgjggffiygiu');

    this.getData();
    this.login();
  }
  getData() {
    this.http
      .get('http://localhost:3000/api/getAllUsers')
      .subscribe((data: any) => {
        console.log(data);
      });
  }
  login(datas:any = '') {
    console.log('login fn called', datas);

    this.http
      .post('http://localhost:3000/api/sign-up', datas)
      .subscribe((data) => {
        console.log(data);
      });
  }
}
