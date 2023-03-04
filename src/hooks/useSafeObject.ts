export const useSafeObject = (object: object) => {
  function createObjectProxy(target) {
    return new Proxy(target, {
      get: (proxyTarget, prop) => {
        const value = proxyTarget[prop];
        console.log({ prop, value });
        if (typeof value === 'undefined') return createObjectProxy({});
        if (typeof value === 'object') return createObjectProxy(value);
        return value;
      },
    });
  }
  return createObjectProxy(object);
};
