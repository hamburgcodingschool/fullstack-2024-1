import { useNavigate } from 'react-router-dom';
import ProductForm from '../ProductForm';

export default function AddProduct({ onAddProduct }) {
  const navigate = useNavigate();

  function handleAddProduct(productData) {
    onAddProduct(productData);
    navigate('/products');
  }

  return (
    <div>
      <h2>Add a new Product</h2>
      <ProductForm onAddProduct={handleAddProduct} />
    </div>
  );
}
