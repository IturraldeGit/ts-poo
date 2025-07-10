import { ProductMemoryService} from './services/product-memory.service';

const productService = new ProductMemoryService();

productService.create({
  title: 'Product 1',
  price: 100,
  description: 'Product 1 description',
  categoryId: 12,
  images: [],
  slug: 'product-1',
  creationAt: new Date(),
  updatedAt: new Date()
});

const products = productService.showAll();
console.log(products);
const productId = products[0].id;
console.log(productId);

productService.updateProduct(productId, {
  title: 'Product 1 updated',
  price: 120,
});

const rta = productService.findOne(productId);
console.log(rta);
