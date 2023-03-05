import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from 'react';

import { Checklist, fetchChecklists } from '@/services';

export const useChecklists = () => {
  const [items, setItems] = useState<Checklist[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(() => {
    setLoading(true);
    fetchChecklists()
      .then(data => setItems(data))
      .finally(() => setLoading(false));
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, []), // eslint-disable-line react-hooks/exhaustive-deps
  );

  return { checklists: items, loading, refresh: fetchData };
};
