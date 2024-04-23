export type Book = {
  _id: string;
  title: string;
  description: string;
  coverImage: Image;
  file: Image;
  author: Author;
};

export type Author = {
  name: string;
};

type Image = {
  public_id: string;
  url: string;
};
