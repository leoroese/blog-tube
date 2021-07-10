export interface IBook {
  bookId: string;
  title: string;
  author: {
    authorId: string;
    username: string;
  };
}
