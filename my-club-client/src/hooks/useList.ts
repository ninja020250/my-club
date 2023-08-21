import { useState } from 'react';

export default function useList<T>({ fetch }: any): {
  loading: boolean;
  items: T[];
  handleFetchData: any;
} {
  const [items, setItems] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);

  const handleFetchData = (params?: any) => {
    setLoading(true);
    return fetch(params)
      .then((data: T[]) => {
        setItems(data);
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 350);
      });
  };

  return {
    loading,
    items,
    handleFetchData,
  };
}
