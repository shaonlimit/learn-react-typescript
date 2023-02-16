//Array props
type allProductProps = {
  allProduct: {
    title: string;
    price: number;
  }[];
};
export const ProductList = (props: allProductProps) => {
  return (
    <div>
      {props.allProduct.map((product, index) => (
        <div key={index}>
          <h2>Product Name: {product.title}</h2>
          <h2>Product Price: ${product.price}</h2>
        </div>
      ))}
    </div>
  );
};
