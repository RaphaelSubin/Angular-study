import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { ApolloModule , APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { OwlModule } from "ngx-owl-carousel";
import { ErrorComponent } from './error/error.component';
import { PipeTestComponent } from './pipe-test/pipe-test.component';
import { TitleCasePipe } from './title-case.pipe';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    RegistrationComponent,
    TestComponent,
    ErrorComponent,
    PipeTestComponent,
    TitleCasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApolloModule,
    HttpClientModule,
    ReactiveFormsModule,
    OwlModule,
    FormsModule
  ],
  providers: [
    {
      provide:APOLLO_OPTIONS,
      useFactory : (httpLink : HttpLink) => {
        return {
          cache : new InMemoryCache(),
          link : httpLink.create({
            uri : 'http://localhost:4000/graphql'
          })
        }
      },
      deps:[HttpLink],
      
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
