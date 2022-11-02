import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private baseUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  get(url: string, params?: any): Observable<any> {
    const data = { params };
    console.log(this.baseUrl + url);

    return this.httpClient
      .get(this.baseUrl + url, data)
      .pipe(catchError(this.errorHandler.bind(this)));
  }

  post(url: string, params?: any): Observable<any> {
    const data = { params };
    console.log(this.baseUrl + url);

    return this.httpClient
      .post(this.baseUrl + url, data)
      .pipe(catchError(this.errorHandler.bind(this)));
  }

  put(url: string, params?: any): Observable<any> {
    const data = { params };
    console.log(this.baseUrl + url);

    return this.httpClient
      .put(this.baseUrl + url, data)
      .pipe(catchError(this.errorHandler.bind(this)));
  }
  delete(url: string): Observable<any> {
    console.log(this.baseUrl + url);

    return this.httpClient
      .delete(this.baseUrl + url)
      .pipe(catchError(this.errorHandler.bind(this)));
  }

  private errorHandler(response: any) {
    const error = response.error;
    const keys = Object.keys(error);
    let message = error[keys[0]];
    if (response.status === 401) {
      //token expire redirect to login
    }
    if (error[keys[0]] instanceof Array) {
      message = error[keys[0]][0];
    }
    if (keys[0] === 'isTrusted') {
      //internet connection Lost
    } else {
      message = keys[0] + ' : ' + message;
    }
    return throwError({ messages: message, error });
  }
}
