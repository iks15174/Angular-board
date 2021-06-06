import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from "./modules/meterial/meterial.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
import { HomeComponent } from './component/home/home.component';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import{ HttpClientModule } from "@angular/common/http";

import * as echarts from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';
import { PostUserComponent } from './component/home/graph/post-user/post-user.component';
import { UserPerPostComponent } from './component/home/graph/user-per-post/user-per-post.component';
import { PostDateComponent } from './component/home/graph/post-date/post-date.component';
import { UserPostDateComponent } from './component/home/graph/user-post-date/user-post-date.component';

import { SignService } from "./service/rest-api/sign.service";
import { UserlistService } from "./service/member/userlist.service";
import { MyinfoService } from './service/rest-api/myinfo.service';
import { BoardService } from './service/rest-api/board.service';
import { GraphService } from './service/graph/graph.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostUserComponent,
    UserPerPostComponent,
    PostDateComponent,
    UserPostDateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxEchartsModule.forRoot({
      echarts
    }),
  ],
  providers: [
    SignService,
    UserlistService,
    MyinfoService,
    BoardService,
    GraphService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
