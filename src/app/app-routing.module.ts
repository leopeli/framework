import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsComponent } from './views/albums/albums.component';
import { AlbumsModule } from './views/albums/albums.module';
import { HomeComponent } from './views/home/home.component';
import { HomeModule } from './views/home/home.module';
import { PostsComponent } from './views/posts/posts.component';
import { PostsModule } from './views/posts/posts.module';
import { TodosComponent } from './views/todos/todos.component';
import { TodosModule } from './views/todos/todos.module';
import { UsersComponent } from './views/users/users.component';
import { UsersModule } from './views/users/users.module';



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
},
{
  path: 'albums',
  component: AlbumsComponent
},
{
  path: 'users',
  component: UsersComponent
}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HomeModule,
    PostsModule,
    TodosModule,
    AlbumsModule,
    UsersModule

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
