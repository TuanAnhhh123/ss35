import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const MyComponent: React.FC = () => {
  const [product, setProduct] = useState<Product>({
    id: 1,
    name: 'Coca cola',
    price: 1000,
    quantity: 10,
  });

  return (
    <div>
      <h1>Thông tin sản phẩm</h1>
      <p>Id: {product.id}</p>
      <p>Name: {product.name}</p>
      <p>Price: {product.price} $</p>
      <p>Quantity: {product.quantity}</p>
    </div>
  );
};

export default MyComponent;
