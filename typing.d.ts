export interface Post extends PostBody {
  _id: string;
  createdAt: number;
  _updatedAt: string;
  _rev: string;
  _type: 'post';
  blockPost: boolean;
}

export type PostBody = {
  text: string;
  designation: string;
  name: string;
  profileImg: string;
  hashtag?: Array<string>;
  image?: string;
  like?: Array<string>;
};

export interface Comment extends CommentBody {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: 'comment';
  Post: Post;
}

export type CommentBody = {
  comment: string;
  name: string;
  designation: string;
  profileImage: string;
  hashtag?: Array<string>;
};

export interface User {
  _id: string;
  displayPicture: string;
  designation: string;
  name: string;
}
