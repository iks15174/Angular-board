import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberRoutingModule } from './member-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from "../../modules/meterial/meterial.module";

import { SignupComponent } from './signup/signup.component';
import { LogoutComponent } from './logout/logout.component';
import { MyinfoComponent } from './myinfo/myinfo.component';
import { SigninComponent } from './signin/signin.component';



@NgModule({
  declarations: [
    SignupComponent,
    LogoutComponent,
    MyinfoComponent,
    SigninComponent
  ],
  imports: [
    CommonModule,
    MemberRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class MemberModule { }
