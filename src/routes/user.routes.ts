import { Router } from 'express';
import UserRepository from '../repositories/UserRepository';
import CreateUserService from '../services/CreateUserService';

const userRouter = Router();
const userRepository = new UserRepository();

userRouter.get('/', (request, response) => {
  response.json(userRepository.findAll());
});

userRouter.post('/', (request, response) => {
  try {
    const service = new CreateUserService(userRepository);
    const {
      code,
      name,
      email,
      tags,
      id,
    } = request.body;
    const user = service.execute({
      code,
      name,
      email,
      tags,
      id,
    });
    response.status(201).json(user);
  } catch (err) {
    return response.status(400).json({ Erro: err.message });
  }
});


export default userRouter;