import { useEffect, useRef, useState } from 'react';

export const useFetchData = (initialCategory) => {
  const [data, setData] = useState([]);
  const categoryRef = useRef(initialCategory);

  const fetchData = async (category) => {
    try {
      const response = await fetch(`http://localhost:7000/productos?category=${category}`);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const changeCategory = (newCategory) => {
    categoryRef.current = newCategory;
    fetchData(categoryRef.current);
  };

  useEffect(() => {
    fetchData(categoryRef.current);
  }, []);

  return [data, changeCategory];
};