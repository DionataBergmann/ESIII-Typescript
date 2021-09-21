import UserRepository from '../repositories/UserRepository';
import User from '../models/User';

export default class CreateUserService {
  private repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  public execute({
   
    code,
    name, 
    email,
    tags,
  }: User): User {
    const user = this.repository.findByCode(code);
    if (user) {
      throw Error('Usuário já cadastrado');
    } else {
      const u = new User({
      
        code,
        name, 
        email,
        tags,
      });
      this.repository.save(u);
      return u;
    }
  }
}