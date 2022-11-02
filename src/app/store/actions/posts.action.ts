import { Action, createAction, props } from '@ngrx/store';
import { Post } from 'typing';
export enum PostActionTypes {
  LoadPosts = '[Post] Load Posts',
  LoadPostsSuccess = '[Post] Load Success',
  LoadPostsFailure = '[Post] Load Failure',
  CreatePosts = '[Post] Create Posts',
  CreatePostsSuccess = '[Post] Create Success',
  CreatePostsFailure = '[Post] Create Failure',
}

export const LoadPosts = createAction(PostActionTypes.LoadPosts);
export class LoadPostsSuccess implements Action {
  readonly type = PostActionTypes.LoadPostsSuccess;
  constructor(public payload: { data: Post[] }) {}
}
export class LoadPostsFailure implements Action {
  readonly type = PostActionTypes.LoadPostsFailure;
  constructor(public payload: { error: string }) {}
}
export const CreatePosts = createAction(
  PostActionTypes.CreatePosts,
  props<{
    name: string;
    designation: string;
    profileImg: string;
    image: string;
    text: string;
    like: any;
  }>()
);
export class CreatePostsSuccess implements Action {
  readonly type = PostActionTypes.CreatePostsSuccess;
  constructor(public payload: { data: Post[] }) {}
}
export class CreatePostsFailure implements Action {
  readonly type = PostActionTypes.CreatePostsFailure;
  constructor(public payload: { error: string }) {}
}
