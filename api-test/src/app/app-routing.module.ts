import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DeleteUserComponent } from './delete-user/delete-user.component'
const routes: Routes = [
  {path:'test',component:TestComponent},
  {path:'forgotPassword',component:ForgotPasswordComponent},
  {path:'removeUser',component:DeleteUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
