import { useEffect, useState } from 'react';

import { api } from '@/services';

export const useChecklists = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    api.checklist.fetchChecklists().then(data => setItems(data));
  }, []);
  return { checklists: items };
};
