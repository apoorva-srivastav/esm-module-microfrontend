import React, { useState } from "react";
import { Button, Card } from "ui";
import _ from "lodash"
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
    <Card>
      <h3>{product.title}</h3>
      <img src={product.image} className={`card ${styles.image}`} height="200px" width="250px" />
      <p className={styles.desc}>{product.description}</p>
      <div className={styles.cardFooter}>
      <Button
       className={styles.button}
        text={addAction}
        onClick={() => {
          setAddAction(addProductState[1]);
          setCount((prevState) => prevState + 1);
          setRemoveActionEnabled(false);
        }}
      />
      <Button
      className={styles.button}
        type="secondary"
        disable={removeActionEnabled}
        text={"Remove From Cart"}
        onClick={() => {
          setRemoveActionEnabled(true);
          setAddAction(addProductState[0]);
          setCount((prevState) => prevState - 1);
        }}
      />
      </div>
    </Card>
  </div>
  );
};
