import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Post, Comment, User } from 'typing';

import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpService: HttpService) {}
  getPosts(): Observable<Post[]> {
    console.log('GetPosts Hits');

    return this.httpService.get('/api/fetchPosts', {});
  }
  createPosts(payload: Post) {
    return this.httpService.post('/api/createPosts', payload);
  }
  // updateUser(payload: Post) {
  //   return this.httpService.put('/api/updateUser', payload);
  // }
  // deleteUser(email: string) {
  //   return this.httpService.delete(`/api/deleteUser?email=${email}`);
  // }
  fetchComment(): Observable<Comment[]> {
    return this.httpService.get('/api/fetchComment', {});
  }
  createComment(payload: Post) {
    return this.httpService.post('/api/createComment', payload);
  }
  getUser(userId: string): Observable<Post[]> {
    return this.httpService.get(`/api/getUser?id=${userId}`, {});
  }
  createUser(userId: string, payload: User) {
    return this.httpService.put(`/api/createUser?id=${userId}`, payload);
  }
  postLike(postId: string, payload: User) {
    return this.httpService.put(`/api/postLike?id=${postId}`, payload);
  }
  postDislike(postId: string, payload: User) {
    return this.httpService.put(`/api/postDislike?id=${postId}`, payload);
  }
}
