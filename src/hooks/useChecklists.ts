import { useEffect, useState } from 'react';

import { Checklist, fetchChecklists } from '@/services';

export const useChecklists = () => {
  const [items, setItems] = useState<Checklist[]>([]);
  useEffect(() => {
    fetchChecklists().then(data => setItems(data));
  }, []);
  return { checklists: items };
};
