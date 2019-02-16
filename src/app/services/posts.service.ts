import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  postsSubject = new Subject<any[]>();

  private posts = [
    {
      title: "Mon premier post",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      loveIts: 15,
      created_at: new Date()
    },
    {
      title: "Mon deuxième post",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      loveIts: -1,
      created_at: new Date()
    },
    {
      title: "Encore un post",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      loveIts: 0,
      created_at: new Date()
    }
  ];

  constructor() { }

  emitPostSubject() {
    this.postsSubject.next(this.posts.slice());
  }

  addPost(title: string, content: string) {
    const postObject = {
      title: '',
      content: '',
      loveIts: 0,
      created_at: new Date(),
    };
    postObject.title = title;
    postObject.content = content;
    this.posts.push(postObject);
    this.emitPostSubject();
  }

  deletePost(post: any) {
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if(postEl === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.emitPostSubject();
  }

  AjoutLove(post: any) {
    post.loveIts = post.loveIts + 1;
    this.emitPostSubject();
  }

  RetraitLove(post: any) {
    post.loveIts = post.loveIts - 1;
    this.emitPostSubject();
  }

}
