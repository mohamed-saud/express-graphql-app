const productsModel = require("./products.model");

module.exports = {
  Query: {
    products: (parant) => productsModel.getAllProducts(),
    productByPrice: (_, arg) =>
      productsModel.getProductByPrice(arg.mainPrice, arg.maxPrice),
    productById: (_, arg) => productsModel.getProductById(arg.id),
  },
  Mutation: {
    addNewProduct: (_, arg) => productsModel.addNewProduct(arg),
    addNewProductReview: (_, arg) => productsModel.addNewProductReview(arg),
  },
};
