const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Mouse", price: 50 },
];

const discountedProducts = products.map((product) => {
  const discountOfProduct = product.price - product.price * 0.2;

  return {
    ...product,
    discountPrice: discountOfProduct,
  };
});

console.log(discountedProducts);
