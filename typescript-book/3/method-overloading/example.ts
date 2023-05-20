interface Product {
  id: number;
  descripttion: string;
}

class ProductServicess {
  //첫 번째 getProducts() 오버로딩 메서드이다
  getProducts(descripttion: string): Product[];
  //두 번째 getProducts() 오버로딩 메서드이다.
  getProducts(id: number): Product;
  //getProducts() 메서드를 구현한다.
  getProducts(product: number | string): Product[] | Product {
    //파라미터 id로 메서드가 호출되었는지 확인한다.
    if (typeof product === 'number') {
      console.log(`Getting the product info for id ${product}`);
      return { id: product, descripttion: 'great product' };
      //파라미터 description으로 메서드가 호출되었는지를 확인한다.
    } else if (typeof product === 'string') {
      console.log(`Getting product with description ${product}`);
      return [
        { id: 123, descripttion: 'blue jeans' },
        { id: 789, descripttion: 'blue jeans' },
      ];
    } else {
      return {
        id: -1,
        descripttion: `Error: getProducts() accept only number or string as args`,
      };
    }
  }
}

const prdService = new ProductServicess();
console.log(prdService.getProducts(123));
console.log(prdService.getProducts('blue jeans'));
