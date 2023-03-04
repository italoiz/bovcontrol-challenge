import { useEffect, useState } from 'react';

import { Checklist, fetchChecklistById } from '@/services';

export const useChecklistDetail = (id: string) => {
  const [details, setDetails] = useState<Checklist | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetchChecklistById(id)
      .then(data => setDetails(data))
      .finally(() => setLoading(false));
  }, [id]);
  return { checklist: details, loading };
};
