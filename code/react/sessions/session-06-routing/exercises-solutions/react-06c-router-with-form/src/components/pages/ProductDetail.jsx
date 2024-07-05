import { useParams } from 'react-router-dom';

export default function ProductDetail({ products }) {
  const { id } = useParams();

  const product = products.find((product) => product.id === id);

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: {product.price} €</p>
    </div>
  );
}
