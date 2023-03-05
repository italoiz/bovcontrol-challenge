import { useEffect, useState } from 'react';

import { Checklist, fetchChecklistById } from '@/services';

export const useChecklistDetail = (id: string, synced?: boolean) => {
  const [details, setDetails] = useState<Checklist | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetchChecklistById(id, synced)
      .then(data => setDetails(data))
      .finally(() => setLoading(false));
  }, [id, synced]);
  return { checklist: details, loading };
};
