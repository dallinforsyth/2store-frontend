export function ProductIndex(props) {
  return (
    <div>
      <h1>All products</h1>
      {props.products.map((product) => (
        <div key={product.id}>
          <p>Name: {product.name}</p>
          <p>Price: {product.price}</p>
          <p>Description: {product.description}</p>
          <p>uantity: {product.quantity}</p>
        </div>
      ))}
    </div>
  );
}
