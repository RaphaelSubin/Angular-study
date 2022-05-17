import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestcomponentComponent } from './testcomponent/testcomponent.component';
const routes: Routes = [{ path: 'test', component: TestcomponentComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
