import { useEffect } from 'react';

import Events from './events';

type EffectCallback = () => undefined | void | (() => void);

export const useSyncEffect = (fn: EffectCallback) => {
  useEffect(() => {
    const handler = () => {
      fn();
    };
    Events.addListener('sync_completed', handler);
    return () => {
      Events.removeListener('sync_completed', handler);
    };
  }, [fn]);
};
