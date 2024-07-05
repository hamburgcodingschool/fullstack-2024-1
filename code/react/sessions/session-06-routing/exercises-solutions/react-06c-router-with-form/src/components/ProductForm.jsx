export default function ProductForm({ onAddProduct }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const fields = Object.fromEntries(formData);
    onAddProduct(fields);
    event.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" required />
      </label>
      <label>
        Description:
        <input type="text" name="description" required />
      </label>
      <label>
        Price:
        <input type="number" name="price" required />
      </label>
      <button type="submit">Add Product</button>
    </form>
  );
}
