import { PipeTestComponent } from './pipe-test/pipe-test.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { UsersComponent } from './components/users/users.component';
import { TestComponent } from './test/test.component';
import { ErrorComponent } from './error/error.component';
const routes: Routes = [
  {path:'registration',component : RegistrationComponent},
  {path:'users' ,component : UsersComponent},
  {path:'test',component :TestComponent },
  {path:'error',component:ErrorComponent},
  {path: 'pipe',component:PipeTestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
