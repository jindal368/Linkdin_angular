import { Action } from '@ngrx/store';
import { Comment } from 'typing';
import {
  CommentActionTypes,
  LoadCommentsSuccess,
  LoadCommentsFailure,
} from '../actions/comments.action';

export interface State {
  comments: Comment[];
  error: string;
}
export const initialState: State = {
  comments: [],
  error: '',
};

export function CommentsReducer(state = initialState, action: any): State {
  switch (action.type) {
    case CommentActionTypes.LoadComments:
      return {
        ...state,
      };

    case CommentActionTypes.LoadCommentsSuccess:
      return {
        ...state,
        comments: action.payload.data.posts,
        error: '',
      };
    case CommentActionTypes.LoadCommentsFailure:
      return {
        ...state,
        comments: [],
        error: action.payload.error,
      };
    default:
      return state;
  }
}
