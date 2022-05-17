import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { ConnectComponent } from './connect/connect.component';
import { RowPostersComponent } from './row-posters/row-posters.component';
import { RecDestinationsComponent } from './rec-destinations/rec-destinations.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    ConnectComponent,
    RowPostersComponent,
    RecDestinationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
