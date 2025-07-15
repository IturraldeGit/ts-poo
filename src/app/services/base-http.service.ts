import axios from 'axios';

import { Category } from './../models/category.model';
import { Product } from './../models/product.model';
import { UpdateProductDto } from '../dtos/product.dto';

export class BaseHTTPService<TypeClass> {
  //public data: TypeClass[] = [];

  constructor(protected url: string) {}

  async getAll() {
    const { data } = await axios.get<TypeClass[]>(this.url);
    return data;

  }

  async update<ID, DTO>(id: ID, changes: DTO) {
    const {data} = await axios.put<Product>(`${this.url}/${id}`, changes);
    return data;
  }
}

(async () => {
  const url1 = 'https://api.escuelajs.co/api/v1/products';
  const url2 = 'https://api.escuelajs.co/api/v1/categories';

  const productService = new BaseHTTPService<Product>(url1);
  const categoryService = new BaseHTTPService<Category>(url2);


  const rta = await productService.getAll()
  console.log('products', rta.length);
  productService.update<Product['id'], UpdateProductDto>(1, {
    title: 'My new product',
    price: 100,
    description: 'New description',
    categoryId: 12,
    images: []
  });

  const rta2 = await categoryService.getAll()
  console.log('categories', rta2.length);
})();


