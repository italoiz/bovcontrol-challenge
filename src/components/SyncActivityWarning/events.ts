type FunctionLike = (...args: any[]) => Promise<void> | void | undefined;

class EventEmitter {
  _subscribers: Map<string, FunctionLike[]> = new Map([]);

  _getSubscribers(eventName: string) {
    return this._subscribers.get(eventName) || [];
  }

  _addSubscriber(eventName: string, fn: FunctionLike) {
    const allSubscribers = this._getSubscribers(eventName);
    allSubscribers.push(fn);
    return allSubscribers;
  }

  emit(eventName: string, ...args: any[]) {
    for (const fn of this._getSubscribers(eventName)) {
      fn(...args);
    }
  }

  addListener(eventName: string, fn: FunctionLike) {
    this._subscribers.set(eventName, this._addSubscriber(eventName, fn));
  }

  removeListener(eventName: string, fn: FunctionLike) {
    const allSubscribers = this._getSubscribers(eventName);
    this._subscribers.set(
      eventName,
      allSubscribers.filter(eventFn => eventFn !== fn),
    );
  }
}

export default new EventEmitter();
