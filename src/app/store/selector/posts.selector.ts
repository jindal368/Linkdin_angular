import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '../reducers/posts.reducer';

const getPostFeatureState = createFeatureSelector<State>('');
const getUserFeatureState = createFeatureSelector<State>('');

export const getUsers = createSelector(
  getPostFeatureState,
  (state) => state.posts
);

export const getError = createSelector(
  getUserFeatureState,
  (state) => state.error
);
