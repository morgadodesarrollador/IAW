export interface IPeople {
    _id?: any;
    id: string
    name: string;
    email: string;
    website?: string;
    github?: string;
    twitter?: string;
    books: Array<string>;
  }