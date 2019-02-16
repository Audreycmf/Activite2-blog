import { Component, Input } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent {

  post: any;

  @Input()
     set fils_posted(fils_posted: any) {
       this.post = fils_posted;
   }

  constructor(private postsService: PostsService) { }

  Ajout() {
    this.postsService.AjoutLove(this.post);
  }

  Retrait() {
    this.postsService.RetraitLove(this.post);
  }

  OnDeletePost() {
    this.postsService.deletePost(this.post);
  }

}
