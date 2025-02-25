import { useEffect, useRef, useState } from 'react';

export const useFetchData = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:7000/productos`);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  

  useEffect(() => {
    fetchData();
  }, []);

  return [data];
};