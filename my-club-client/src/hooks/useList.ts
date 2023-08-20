import { useState } from 'react';

export default function useList<T>({ fetch }: any) {
  const [items, setItems] = useState<T[]>([]);

  const handleFetchData = () => {
    return fetch().then((data: T[]) => {
      setItems(data);
    });
  };

  return {
    items,
    handleFetchData,
  };
}
