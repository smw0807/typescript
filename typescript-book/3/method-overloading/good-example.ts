class ProductServices {
  getProducts(); //허용 가능한 메서드를 선언
  getProducts(id: number); //허용 가능한 메서드를 선언
  getProducts(id?: number) {
    if (typeof id === 'number') {
      console.log(`Getting the product info for ${id}`);
    } else {
      console.log(`Getting all products`);
    }
  }
}

const prodService = new ProductServices();
prodService.getProducts(123);
prodService.getProducts();
