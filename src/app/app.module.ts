import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { menu, HeroIconModule, allIcons, annotation } from 'ng-heroicon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ProfileComponent } from './component/profile/profile.component';
import { FeedComponent } from './component/feed/feed.component';
import { NewsComponent } from './component/news/news.component';
import { HeaderIconsComponent } from './component/header-icons/header-icons.component';
import { BoxComponent } from './component/box/box.component';
import { PostsComponent } from './component/posts/posts.component';
import { PostBodyComponent } from './component/post-body/post-body.component';
import { CommentComponent } from './component/comment/comment.component';
import { FetchCommentComponent } from './component/fetch-comment/fetch-comment.component';
import { ApiService } from './services/api.service';
import { HttpService } from './services/http.service';
import { StoreModule } from '@ngrx/store';
import { PostsReducer } from './store/reducers/posts.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {
  HttpClientModule,
  HttpClient,
  HttpHandler,
} from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { PostsEffect } from './store/effects/posts.effect';
import { CommentsEffect } from './store/effects/comments.effect';
import { CommentsReducer } from './store/reducers/comments.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    FeedComponent,
    NewsComponent,
    HeaderIconsComponent,
    BoxComponent,
    PostsComponent,
    PostBodyComponent,
    CommentComponent,
    FetchCommentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreDevtoolsModule,
    HeroIconModule.forRoot(
      {
        menu,
      },
      {
        defaultHostDisplay: 'inlineBlock', // default 'none'
        attachDefaultDimensionsIfNoneFound: true, // default 'false'
      }
    ),
    HeroIconModule.withIcons({
      ...allIcons,
    }),
    HeroIconModule.withIcons(
      {
        annotation,
        menu,
      },
      {
        /**
         * Child level options.
         * Non passed options will use the rootModule options.
         */
        defaultHostDisplay: 'inlineBlock',
      }
    ),
    StoreModule.forRoot({
      posts: PostsReducer,
      comments: CommentsReducer,
    }),
    EffectsModule.forRoot([PostsEffect, CommentsEffect]),
  ],
  providers: [ApiService, HttpService],
  bootstrap: [AppComponent],
})
export class AppModule {}
