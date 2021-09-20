import { Router } from 'express';
import ProductRepository from '../repositories/ProductRepository';
import CreateProductService from '../services/CreateProductService';

const productRouter = Router();
const productRepository = new ProductRepository();

productRouter.get('/', (request, response) => {
  response.json(productRepository.findAll());
});

productRouter.post('/', (request, response) => {
  try {
    const service = new CreateProductService(productRepository);
    const {
      buyPrice,
      code,
      category,
      description,
      lovers,
      sellPrice,
      tags,
      id,
    } = request.body;
    const produto = service.execute({
      buyPrice,
      code,
      category,
      description,
      lovers,
      sellPrice,
      tags,
      id,
    });
    response.status(201).json(produto);
  } catch (err) {
    return response.status(400).json({ Erro: err.message });
  }
});

// productRouter.delete('/:code', async (request, response) =>{
//   const code = +request.params.code
//   if (code == NaN){
//     return response.status(400).json("Favor colocar um número no código")
//   }
//   const res = productRepository.delete(code)
//   return response.status(204).json(res)
// })

export default productRouter;