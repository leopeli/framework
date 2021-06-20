import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { HomeModule } from './views/home/home.module';
import { PostsComponent } from './views/posts/posts.component';
import { PostsModule } from './views/posts/posts.module';



const routes: Routes = [{
  path: "",
  component: HomeComponent,
}, {
  path: 'posts',
  component: PostsComponent
}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HomeModule,
    PostsModule,

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
