import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { SigninComponent } from './component/member/signin/signin.component';

const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'signin', component: SigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
