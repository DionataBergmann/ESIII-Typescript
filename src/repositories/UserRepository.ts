import User from '../models/User';

export default class ProductRepository {
  private users: Array<User>;

  constructor() {
    this.users = [];
  }

  public findAll(): Array<User> {
    return this.users;
  }

  public findByCode(code: number): User | undefined {
    return this.users.find(v => v.code === code);
  }

  public save({
    
    code,
    name,
    email,
    tags,
  }: User): User {
    const user = new User({
     
      code,
      name,
      email,
      tags,
    });
    this.users.push(user);
    return user;
  }
}