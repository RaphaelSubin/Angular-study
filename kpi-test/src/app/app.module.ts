import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { RowPostersComponent } from './row-posters/row-posters.component';
import { EventsComponent } from './events/events.component';
import { AdBoxComponent } from './ad-box/ad-box.component';
import { FooterComponent } from './footer/footer.component';
import { TestcomponentComponent } from './testcomponent/testcomponent.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    RowPostersComponent,
    EventsComponent,
    AdBoxComponent,
    FooterComponent,
    TestcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
