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
import { UserlistService } from "./service/member/userlist.service";
import { MyinfoService } from './service/rest-api/myinfo.service';
import { BoardService } from './service/rest-api/board.service';
import { SignupComponent } from './component/member/signup/signup.component';
import { LogoutComponent } from './component/member/logout/logout.component';
import { MyinfoComponent } from './component/member/myinfo/myinfo.component';
import { BoardComponent } from './component/board/board.component';
import { AddpostComponent } from './component/board/addpost.component';
import { PostViewComponent } from './component/board/post-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    SignupComponent,
    LogoutComponent,
    MyinfoComponent,
    BoardComponent,
    AddpostComponent,
    PostViewComponent,
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
    UserlistService,
    MyinfoService,
    BoardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
