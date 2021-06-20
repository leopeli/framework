import { Component, OnInit } from '@angular/core';
import { ModelPost } from './post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: ModelPost[];

  constructor(private _postService: PostsService) { }

  ngOnInit() {
    this._postService.getPosts().subscribe(posts => {
      this.posts = posts;
      console.log(this.posts)
    })
  }

}
