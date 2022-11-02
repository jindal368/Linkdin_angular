import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { catchError, map, mergeMap, Observable, of } from 'rxjs';
import {
  CreatePostsFailure,
  CreatePostsSuccess,
  LoadPostsFailure,
  LoadPostsSuccess,
  PostActionTypes,
} from '../actions/posts.action';
import { ApiService } from '../../services/api.service';
@Injectable()
export class PostsEffect {
  constructor(private actions$: Actions, private apiService: ApiService) {}

  @Effect()
  loadPosts$: Observable<Action> = this.actions$.pipe(
    ofType(PostActionTypes.LoadPosts),
    mergeMap((action) =>
      this.apiService.getPosts().pipe(
        map((posts) => new LoadPostsSuccess({ data: posts })),
        catchError((err) => of(new LoadPostsFailure({ error: err })))
      )
    )
  );

  @Effect()
  createPosts$: Observable<Action> = this.actions$.pipe(
    ofType(PostActionTypes.CreatePosts),
    mergeMap((action) =>
      this.apiService.createPosts(action).pipe(
        map((posts) => new CreatePostsSuccess({ data: posts })),
        catchError((err) => of(new CreatePostsFailure({ error: err })))
      )
    )
  );
}
