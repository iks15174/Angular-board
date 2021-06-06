import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './Board/board.component';
import { AddpostComponent } from './AddPost/addpost.component';
import { PostViewComponent } from './PostView/post-view.component';
import { PostModifyComponent } from './PostModify/post-modify.component';
import { AuthGuard } from 'src/app/guards/auth.guard';


const routes: Routes = [
  {path : "", component: BoardComponent},
  {path : "add", component: AddpostComponent, canActivate: [AuthGuard]},
  {path : "post/:postId", component: PostViewComponent},
  {path : "post/:postId/modify", component: PostModifyComponent, canActivate: [AuthGuard]}
]



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardRoutingModule { }
