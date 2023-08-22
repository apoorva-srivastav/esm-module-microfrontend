import axios from "axios"
import { useState, useEffect } from "react"


export const useFetchProducts = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setloading] = useState(true);

  //https://fakestoreapi.com/products
  const fetchData = () => {
      axios
          .get('https://fakestoreapi.com/products')
          .then((res) => {
              setData(res.data);
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

