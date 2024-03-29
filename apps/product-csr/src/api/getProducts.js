//import { get } from "https://esm.sh/axios@1.4.0"

import { useState, useEffect } from "https://esm.sh/react@18.2.0"


export const useFetchProducts = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setloading] = useState(true);

  //https://fakestoreapi.com/products
  //'https://dummyjson.com/products') , res.data.products
  const fetchData = () => {
      fetch('https://fakestoreapi.com/products')
      .then((res) => res.json()
      )
          .then((res) => {
              setData(res);
          })
          .catch((err) => {
              setError(err);
          })
          .finally(() => {
              setloading(false);
          });
  };

  useEffect(() => {
      fetchData();
  }, []);

  // custom hook returns value
  return { data, error, isLoading };
}

