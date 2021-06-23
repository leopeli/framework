import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/core/header/header.service';
import { ModelPost } from './post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: ModelPost[];

  constructor(
    private _postService: PostsService,
    private _headerService: HeaderService
    ) { 
      _headerService.headerData = {
        title: 'Posts',
        icon: 'notifications',
        routerUrl: '/posts'
      }
    }

  ngOnInit() {
    this._postService.getPosts().subscribe(posts => {
      this.posts = posts;
    })
  }

}
