import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";


import { SignService } from "./service/rest-api/sign.service";
import { UserlistService } from "./service/member/userlist.service";
import { MyinfoService } from './service/rest-api/myinfo.service';
import { BoardService } from './service/rest-api/board.service';
import { GraphService } from './service/graph/graph.service';
import { MaterialModule } from './modules/meterial/meterial.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
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
