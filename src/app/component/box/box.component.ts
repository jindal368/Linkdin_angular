import { Component, OnInit, Output } from '@angular/core';
import { CreatePosts } from '../../store/actions/posts.action';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../app.state';
import { Post } from 'typing';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
})
export class BoxComponent implements OnInit {
  @Output() handleRefresh() {}
  toggleButton: boolean = false;
  setText: string = '';
  setPhotoLink: string = '';
  constructor(private store: Store<AppState>) {}

  onUpdateText(event: Event) {
    this.setText = (<HTMLInputElement>event.target).value;
  }
  onUpdateLink(event: Event) {
    this.setPhotoLink = (<HTMLInputElement>event.target).value;
  }
  handleSubmit(event: Event) {
    event.preventDefault();
    let payload = {
      name: 'Vishesh Jindal',
      designation: 'SDE @ Gainsight',
      profileImg: 'user.photoURL',
      image: this.setPhotoLink,
      text: this.setText,
      like: [],
    };
    this.store.dispatch(CreatePosts(payload));
  }
  updateToggle() {
    this.toggleButton = true;
  }
  ngOnInit(): void {}
}
