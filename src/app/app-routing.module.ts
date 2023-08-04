import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArticleComponent} from './components/article/article.component';
import {ArticleListComponent} from './components/article-list/article-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/article-list', pathMatch: 'full' },
  { path: 'article-list', component: ArticleListComponent },
  { path: 'article/:id', component: ArticleComponent },
  { path: '**', redirectTo: '/article-list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
