export type Author = {
  name: string;
  profile: string;
  image: string;
  designation: string;
  external_link: string;
};

export type Blog = {
  id: number;
  title: string;
  paragraph: string;
  image: string;
  author: Author;
  tags: string[];
  publishDate: string;
  external_link: string;
};
