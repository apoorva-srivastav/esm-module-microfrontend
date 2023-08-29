import { ProductDetail } from "./ProductDetail";
import styles from "./ProductList.module.css";


export const ProductList = ({products}) => {
  return (
    <div className={styles.flex}>
      {products.map((product) => (
        <ProductDetail key={product.id} product={product} />
      ))}
    </div>
  );
};
