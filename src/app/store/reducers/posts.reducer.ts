import { Action } from '@ngrx/store';
import { Post } from 'typing';
import {
  PostActionTypes,
  LoadPostsSuccess,
  LoadPostsFailure,
} from '../actions/posts.action';

export interface State {
  posts: Post[];
  error: string;
}
export const initialState: State = {
  posts: [],
  error: '',
};

export function PostsReducer(state = initialState, action: any): State {
  switch (action.type) {
    case PostActionTypes.LoadPosts:
      return {
        ...state,
      };

    case PostActionTypes.LoadPostsSuccess:
      return {
        ...state,
        posts: action.payload.data.posts,
        error: '',
      };
    case PostActionTypes.LoadPostsFailure:
      return {
        ...state,
        posts: [],
        error: action.payload.error,
      };
    default:
      return state;
  }
}
