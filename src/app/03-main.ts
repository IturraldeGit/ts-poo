import { ProductHttpService } from './services/product-http.service'

(async() => {
  const productService = new ProductHttpService();

  console.log('---'.repeat(10));
  console.log('Show all products');
  const products = await productService.showAll();
  console.log(products);
  console.log(products.length);

  const productId = products[0].id;
  console.log('---'.repeat(10));
  console.log('Update a product');


  await productService.updateProduct(productId, {
    price: 1000,
    title: 'New Product from Daniel',
    description: 'New Description from Daniel',
    images: ['https://placeimg.com/640/480/any'],
  });

  const product = await productService.findOne(productId);
  console.log('---'.repeat(10));
  console.log('Find one product');
  console.log(product);
})();
