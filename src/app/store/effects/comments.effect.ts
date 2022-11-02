import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { catchError, map, mergeMap, Observable, of } from 'rxjs';
import {
  LoadCommentsFailure,
  LoadCommentsSuccess,
  CommentActionTypes,
} from '../actions/comments.action';
import { ApiService } from '../../services/api.service';
@Injectable()
export class CommentsEffect {
  constructor(private actions$: Actions, private apiService: ApiService) {}

  @Effect()
  loadComments$: Observable<Action> = this.actions$.pipe(
    ofType(CommentActionTypes.LoadComments),
    mergeMap((action) =>
      this.apiService.fetchComment().pipe(
        map((comments) => new LoadCommentsSuccess({ data: comments })),
        catchError((err) => of(new LoadCommentsFailure({ error: err })))
      )
    )
  );
}
