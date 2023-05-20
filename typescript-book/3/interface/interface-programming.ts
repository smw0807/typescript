interface Product {
  id: number;
  desciption: string;
}
interface IProductService {
  getProducts(): Product[];
  getProductById(id: number): Product;
}
class ProductService implements IProductService {
  getProducts(): Product[] {
    const data: Product[] = [
      { id: 0, desciption: 'a' },
      { id: 1, desciption: 'b' },
      { id: 2, desciption: 'c' },
      { id: 3, desciption: 'd' },
    ];
    return data;
  }
  getProductById(id: number): Product {
    return {
      id: 0,
      desciption: 'a',
    };
  }
}
class MockProductService implements IProductService {
  getProducts(): Product[] {
    return [];
  }
  getProductById(id: number): Product {
    return { id: 0, desciption: '00' };
  }
}

//타입을 반환하는 팩토리함수
function getProductService(isProduction: boolean): IProductService {
  if (isProduction) {
    return new ProductService();
  } else {
    return new MockProductService();
  }
}
let productService: IProductService; //인터페이스 타입을 나타내는 상후

const isProd = true;
productService = getProductService(isProd); //ProductService 인스턴스를 가져옴

const products: Product[] = productService.getProducts(); //productService 내 메서드를 호출
