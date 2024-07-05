const ProductList = ({ products }) => (
    <div style={{ padding: '20px' }}>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
  
  export default ProductList;
  