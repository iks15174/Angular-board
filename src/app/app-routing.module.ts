import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  {
    path : 'auth',
    loadChildren: () => import('./component/member/member.module').then(m =>
      m.MemberModule),
  },
  {
    path : 'board',
    loadChildren: () => import('./component/board/board.module').then(m =>
      m.BoardModule),
  },
  {path : '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
 export class AppRoutingModule { }
 
