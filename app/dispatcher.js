import guid from 'guid';

const listeners = {};

const Dispatcher = {
  register: function(callback) {
    const id = guid.raw();
    listeners[id] = callback;
    return id;
  },
  dispatch: function(payload) {
    console.info('Dispatching...', payload);
    for (const id in listeners) {
      if ({}.hasOwnProperty.call(listeners, id)) {
        const listener = listeners[id];
        listener(payload);
      }
    }
  },
};

export default Dispatcher;
