import { Component, OnInit, Output } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';
import { Post } from 'typing';
import { LoadPosts } from '../../store/actions/posts.action';
import { ApiService } from '../../services/api.service';
import { AppState } from '../../app.state';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  public posts!: Post[];
  constructor(private apiService: ApiService, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(LoadPosts());
    this.store.pipe(select((state) => state.posts)).subscribe((data: any) => {
      this.posts = data.posts;
      console.log('Posts : ', this.posts);
    });
  }
}
