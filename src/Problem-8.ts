type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

const calculateTotalPrice = (products: Product[]): number => {
  return products
    .map((product) => {
      const total = product.price * product.quantity;

      return product.discount ? total * (1 - product.discount / 100) : total;
    })
    .reduce((acc, curr) => acc + curr, 0);
};

const products: Product[] = [
  { name: "Pen", price: 10, quantity: 2 },
  { name: "Notebook", price: 25, quantity: 3, discount: 10 },
  { name: "Bag", price: 50, quantity: 1, discount: 20 },
];

console.log(calculateTotalPrice(products));
