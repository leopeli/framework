import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { HomeModule } from './views/home/home.module';
import { PostsComponent } from './views/posts/posts.component';
import { PostsModule } from './views/posts/posts.module';
import { TodosComponent } from './views/todos/todos.component';
import { TodosModule } from './views/todos/todos.module';



const routes: Routes = [{
  path: "",
  component: HomeComponent,
},
{
  path: 'posts',
  component: PostsComponent
},
{
  path: 'todos',
  component: TodosComponent
}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HomeModule,
    PostsModule,
    TodosModule,

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
