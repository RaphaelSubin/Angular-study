import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { firstValueFrom, lastValueFrom, Observable } from 'rxjs';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  accessToken =
    'IGQVJVdk5fWmlRRXZAFb3VxczktR1l6RmJoUWVxREY1d0k4V2dqRzI1bWt1NGNTaFlzUlNYVnZABVk8yeExNdUxWMVhYWGhGbkl6emg3YUd0bDJRODl3bE1NdmlRd3B0WHp0TklLSTJPQ2diVXdrdHk5bwZDZD';
  userId = '17841408485581744';
  user: any;
  userImages: any[] = [];
  NO_OF_IMAGES = 3;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    //this.loadImages();
    // this.getDob();
    this.getInstagramImage();
  }
  // getMediaList(url:string): Observable<any> {
  //   return this.http.get(url);
  // }

  // getImage(mediaId: string) {
  //   this.http
  //     .get(
  //       `https://graph.instagram.com/${mediaId}/?fields=id,media_type,media_url,username,caption,timestamp&access_token=${this.accessToken}`
  //     )
  //     .subscribe((result: any) => {
  //       this.userImages.push(result);
  //       //localStorage.setItem('mediaList',JSON.stringify(this.userImages))

  //     });
  // }
  // async loadImages() {
  //   const localMedia = localStorage.getItem('mediaList');
  //   if (!localMedia) {
  //     let mediaUrl = `https://graph.instagram.com/me/media?fields=media_count,media_type,permalink,media_url,caption&limit=${this.NO_OF_IMAGES}&access_token=${this.accessToken}`;
  //    // while(mediaUrl){
  //     const mediaSub = await this.getMediaList(mediaUrl);
  //     const result=await firstValueFrom(mediaSub)
  //     this.userImages = result?.data;
  //     console.log(this.userImages);
  //     // mediaList.forEach((media: any) => {
  //     //   this.getImage(media.id);
  //     // });
  //    // mediaUrl=result?.paging?.next;
  //     //console.log("media url ",mediaUrl);
  //     }
  //  // }
  //      else {
  //     this.userImages = JSON.parse(localMedia);
  //   }
  // }

  // getDob(){
  //   let today = new Date();

  //   today.setFullYear(new Date().getFullYear() - 3)
  //   today.setMonth(new Date().getMonth())
  //   console.log(today);

  // }

  // getH1(){
  //   const list = document.querySelectorAll('div.test h1');
  //   console.log(list);

  // }

  // getDoc(){
  //  const item =  document.querySelector('div.test');
  //  const list = item?.querySelectorAll('.test h1')
  //   list?.forEach((data) => {
  //     console.log(data);

  //   })
  // }

  getInstagramImage() {
    this.http.get(
      `https://graph.instagram.com/me/media?fields=media_count,media_type,permalink,media_url,caption&limit=${this.NO_OF_IMAGES}&access_token=${this.accessToken}`
    ).subscribe((result:any) => {
      this.userImages = result?.data;
    })
  }
}
