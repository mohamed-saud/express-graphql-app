const orders = [
  {
    date: "2023-01-01",
    subtotal: 39.98,
    items: [
      {
        product: { id: "1", description: "Product 1", price: 19.99 },
        quantity: 2,
        totalPrice: 39.98,
      },
    ],
  },
];

function getAllOrders() {
  return orders;
}
module.exports = {
  getAllOrders,
};
