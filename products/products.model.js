const products = [
  {
    id: "1",
    name: "mohamed1",
    price: 19.99,
    description: "Product 1",
    reviews: [
      { reating: 5, comment: "Great product!" },
      { reating: 4, comment: "Good value for money." },
    ],
  },
  {
    id: "2",
    name: "mohamed1",
    price: 19.99,
    description: "Product 1",
    reviews: [
      { reating: 5, comment: "Great product!" },
      { reating: 4, comment: "Good value for money." },
    ],
  },
];

function getAllProducts() {
  return products;
}

function getProductByPrice(main, max) {
  return products.filter(
    (product) => product.price > main && product.price < max,
  );
}
function getProductById(id) {
  return products.find((pro) => pro.id === id);
}
function addNewProduct({ id, description, price }) {
  const newProduct = {
    id: id,
    description: description,
    price: price,
    reviews: [],
  };
  products.push(newProduct);
  return newProduct;
}
function addNewProductReview({ id, reating, comment }) {
  const newReview = { reating: reating, comment: comment };
  products.find((product) => product.id === id).reviews.push(newReview);
  return newReview;
}
module.exports = {
  getAllProducts,
  getProductByPrice,
  getProductById,
  addNewProduct,
  addNewProductReview,
};
