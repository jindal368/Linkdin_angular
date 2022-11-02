import { Action, createAction } from '@ngrx/store';
import { Comment } from 'typing';
export enum CommentActionTypes {
  LoadComments = '[Comment] Load Comments',
  LoadCommentsSuccess = '[Comment] Load Success',
  LoadCommentsFailure = '[Comment] Load Failure',
}

export const LoadComments = createAction(CommentActionTypes.LoadComments);
export class LoadCommentsSuccess implements Action {
  readonly type = CommentActionTypes.LoadCommentsSuccess;
  constructor(public payload: { data: Comment[] }) {}
}
export class LoadCommentsFailure implements Action {
  readonly type = CommentActionTypes.LoadCommentsFailure;
  constructor(public payload: { error: string }) {}
}
