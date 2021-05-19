import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { SigninComponent } from './component/member/signin/signin.component';
import { SignupComponent } from './component/member/signup/signup.component';
import { LogoutComponent } from './component/member/logout/logout.component';

const routes: Routes = [
  {path : '', component: HomeComponent},
  {path : 'signin', component: SigninComponent},
  {path : "signup", component: SignupComponent },
  {path : "logout", component: LogoutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
