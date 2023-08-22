import React, { useState } from "react";
import { Button } from "ui";
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
