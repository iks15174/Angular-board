import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from "../../modules/meterial/meterial.module";
import * as echarts from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';

import { HomeComponent } from './home.component';
import { PostUserComponent } from './graph/post-user/post-user.component';
import { UserPerPostComponent } from './graph/user-per-post/user-per-post.component';
import { PostDateComponent } from './graph/post-date/post-date.component';
import { UserPostDateComponent } from './graph/user-post-date/user-post-date.component';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [
    PostUserComponent,
    UserPerPostComponent,
    PostDateComponent,
    UserPostDateComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEchartsModule.forRoot({
      echarts
    }),
  ]
})
export class HomeModule { }
