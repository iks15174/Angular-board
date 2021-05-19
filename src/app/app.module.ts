import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from "./modules/meterial/meterial.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
import { HomeComponent } from './component/home/home.component';
import { SigninComponent } from './component/member/signin/signin.component';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import{ HttpClientModule } from "@angular/common/http";
import { SignService } from "./service/rest-api/sign.service";
import { SignupComponent } from './component/member/signup/signup.component';
import { LogoutComponent } from './component/member/logout/logout.component';
import { MyinfoComponent } from './component/member/myinfo/myinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    SignupComponent,
    LogoutComponent,
    MyinfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    SignService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
