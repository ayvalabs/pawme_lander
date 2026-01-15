type EventMap = Record<string, any>;
type EventKey<T extends EventMap> = string & keyof T;
type EventReceiver<T> = (params: T) => void;

interface Emitter<T extends EventMap> {
  on<K extends EventKey<T>>(eventName: K, fn: EventReceiver<T[K]>): () => void;
  off<K extends EventKey<T>>(eventName: K, fn: EventReceiver<T[K]>): void;
  emit<K extends EventKey<T>>(eventName: K, params: T[K]): void;
}

export function createNanoEvents<T extends EventMap = any>(): Emitter<T> {
  let events: {[key: string]: Function[]} = {};

  return {
    on(eventName, fn) {
      (events[eventName] = events[eventName] || []).push(fn);
      return () => {
        events[eventName] = (events[eventName] || []).filter(i => i !== fn);
      };
    },
    off(eventName, fn) {
      if (events[eventName]) {
        events[eventName] = events[eventName].filter(i => i !== fn);
      }
    },
    emit(eventName, ...args) {
      (events[eventName] || []).forEach(i => i.apply(null, args));
    },
  };
}

export const errorEmitter = createNanoEvents<{
  'permission-error': (error: any) => void;
}>();
