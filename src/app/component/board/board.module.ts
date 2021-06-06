import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from "../../modules/meterial/meterial.module";


import { CommentComponent } from '../comment/Comment/comment.component';
import { AddcommentComponent } from '../comment/AddComment/addcomment.component';
import { BoardComponent } from './Board/board.component';
import { AddpostComponent } from './AddPost/addpost.component';
import { PostViewComponent } from './PostView/post-view.component';
import { PostModifyComponent } from './PostModify/post-modify.component';
import { BoardRoutingModule } from './board-routing.module';



@NgModule({
  declarations: [
    CommentComponent,
    AddcommentComponent,
    BoardComponent,
    AddpostComponent,
    PostViewComponent,
    PostModifyComponent
  ],
  imports: [
    CommonModule,
    BoardRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class BoardModule { }
