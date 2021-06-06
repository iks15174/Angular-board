import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './signup/signup.component';
import { LogoutComponent } from './logout/logout.component';
import { MyinfoComponent } from './myinfo/myinfo.component';
import { SigninComponent } from './signin/signin.component';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: "signup", component: SignupComponent },
  { path: "logout", component: LogoutComponent },
  { path: "myinfo", component: MyinfoComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
