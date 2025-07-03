import axios from 'axios';

(async() => {

  function delay (time: number) {
    const promise = new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve('done');
      }, time);
    });
    return promise;
  }

  function getProducts() {
    const promise = axios({
      url: 'https://api.escuelajs.co/api/v1/products',
      method: 'GET',
    });
    return promise;
  }

  async function getProductsAsync() {
    const rta = await axios.get('https://api.escuelajs.co/api/v1/products');
    return rta.data;
  }


  console.log('---- start ----');
  const rta = await delay(3000);
  console.log(rta);
  console.log('---- end ----');

  console.log('---- products ----');
  const products = await getProductsAsync();
  console.log(products);
  console.log('---- products end ----');
})();
