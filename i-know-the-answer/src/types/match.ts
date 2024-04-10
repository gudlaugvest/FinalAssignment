import { User } from './user';

export interface Options {
  value: string;
  match: string;
}

export interface Questions {
  title: string;
  items: Options[];
}

export interface Match {
  _id: string;
  title: string;
  titleImage: string;
  questions: Questions[];
  owner: Partial<User>;
}
