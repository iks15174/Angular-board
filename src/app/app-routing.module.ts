import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { SigninComponent } from './component/member/signin/signin.component';
import { SignupComponent } from './component/member/signup/signup.component';
import { LogoutComponent } from './component/member/logout/logout.component';
import { MyinfoComponent } from './component/member/myinfo/myinfo.component';
import { BoardComponent } from './component/board/board.component';
import { AddpostComponent } from './component/board/addpost.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path : '', component: HomeComponent},
  {path : 'signin', component: SigninComponent},
  {path : "signup", component: SignupComponent },
  {path : "logout", component: LogoutComponent},
  {path : "myinfo", component: MyinfoComponent, canActivate: [AuthGuard]},
  {path : "board", component: BoardComponent},
  {path : "board/add", component: AddpostComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
 export class AppRoutingModule { }
 
