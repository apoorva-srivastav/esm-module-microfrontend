import { ProductDetail } from "./ProductDetail";
import styles from "./ProductList.module.css";


export const ProductList = ({products}) => {
  console.log('data>>', products[1])
  return (
    <div className={styles.flex}>
      {products.map((product) => (
        <ProductDetail key={product.id} product={product} />
      ))}
    </div>
  );
};
