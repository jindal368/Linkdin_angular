import { Component, Input, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Comment } from 'typing';
import { AppState } from '../../app.state';
@Component({
  selector: 'app-post-body',
  templateUrl: './post-body.component.html',
  styleUrls: ['./post-body.component.scss'],
})
export class PostBodyComponent implements OnInit {
  @Input() public post!: any;
  public setShowComment: boolean = false;
  public comments: Comment[] = [];
  constructor() {}

  postTimeLine = (timeStamp: any): string => {
    let calculatedTime = Math.round(Date.now() - timeStamp);
    if (calculatedTime / 3600000 >= 1) {
      return `${(calculatedTime / 3600000).toFixed()}h`;
    } else if (calculatedTime / 60000 >= 1) {
      return `${(calculatedTime / 60000).toFixed()}min`;
    } else {
      return `${(calculatedTime / 1000).toFixed()}sec`;
    }
  };

  toggleShowComment() {
    this.setShowComment = !this.setShowComment;
  }
  ngOnInit(): void {}
}
