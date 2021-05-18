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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninComponent,
    //SignupComponent,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
