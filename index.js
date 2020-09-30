const data = [
  {
    product_name: "Nail",
    count: 67,
    price_for_all: 364
  },
  {
    product_name: "Hammer",
    count: 43,
    price_for_all: 453
  },
  {
    product_name: "Tile",
    count: 23,
    price_for_all: 553
  }
];

const res = data.reduce(({count, price}, {count: itemCount, price_for_all}) => 
  ({count: count + itemCount, price: price + price_for_all}), 
  {count: 0, price: 0});

console.log(res)