import { uuid } from 'uuidv4';

export default class User {
  id: string;

  code: number;

  name: string;

  email: string;

  tags: Array<User>;

  constructor({
    code,
    name,
    email,
    tags,
  }: Omit<User, 'id'>) {
    this.code = code;
    this.name = name;
    this.email = email;
    this.tags = tags;
    this.id = uuid();
  }
}