import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./component/member/member.module').then(m =>
      m.MemberModule),
  },
  {
    path: 'board',
    loadChildren: () => import('./component/board/board.module').then(m =>
      m.BoardModule),
  },
  {
    path: '',
    loadChildren: () => import('./component/home/home.module').then(m =>
      m.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

