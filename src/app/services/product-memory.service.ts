import { faker } from '@faker-js/faker';

import { Product } from '../models/product.model';
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';
import { ProductService } from '../models/product-service.model';

export class ProductMemoryService implements ProductService {
  private products: Product[] = [];

  create (data: CreateProductDto): Product {
    const newProduct = {
      ...data,
      id: faker.number.int(),
      category: {
        id: data.categoryId,
        name: faker.commerce.department(),
        image: faker.image.avatar(),
        slug: faker.lorem.slug(),
        creationAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
      },
    }
    return this.add(newProduct);
  }

  add (product: Product) {
    this.products.push(product);
    return product;
  }

  updateProduct (id: Product['id'], changes: UpdateProductDto ): Product {
    const index = this.products.findIndex(item => item.id === id);
    const prevData = this.products[index];
    this.products[index] = {
      ...prevData,
      ...changes
    }
    return this.products[index];
  }

  findOne (id: Product['id']) {
    return this.products.find(item => item.id === id);
  }

  showAll () {
    return this.products;
  }
}
