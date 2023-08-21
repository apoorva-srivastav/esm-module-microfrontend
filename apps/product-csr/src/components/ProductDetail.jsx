import { useState } from "https://esm.sh/react@18.2.0";
import { Button } from "https://ui-l.vercel.app/Button.mjs";
import _ from "https://esm.sh/lodash@4.17.21"
import styles from "../App.module.css";

const addProductState = [
  "Add to cart",
  "Added to cart"
]

export const ProductDetail = ({ product, setCount = _.noop}) => {
  const [addAction, setAddAction] = useState(addProductState[0]);
  const [removeActionEnabled, setRemoveActionEnabled] = useState(true)

  return (
    <div className={`card ${styles.flexItem}`}>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <Button text={addAction} onClick={() => {
        setAddAction(addProductState[1])
        setCount((prevState) => prevState+1)
        setRemoveActionEnabled(false)
      }
      } />
      <Button disable={removeActionEnabled} text={'Remove From Cart'} onClick={() => {
        setRemoveActionEnabled(true)
        setAddAction(addProductState[0])
        setCount((prevState) => prevState-1)
      }
      } />
    </div>
  );
};
