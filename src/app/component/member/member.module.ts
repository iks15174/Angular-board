import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberRoutingModule } from './member-routing.module';
import { MaterialModule } from "../../modules/meterial/meterial.module";

import { SignupComponent } from './signup/signup.component';
import { LogoutComponent } from './logout/logout.component';
import { MyinfoComponent } from './myinfo/myinfo.component';
import { SigninComponent } from './signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



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
