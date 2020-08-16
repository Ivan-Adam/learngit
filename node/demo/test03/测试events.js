const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('触发事件');
});
myEmitter.emit('event');


// const myEmitter1 = new MyEmitter();
// myEmitter1.on('event', function(a, b) {
//   console.log(a, b, this, this === myEmitter1);
//   // 打印:
//   //   a b MyEmitter {
//   //     domain: null,
//   //     _events: { event: [Function] },
//   //     _eventsCount: 1,
//   //     _maxListeners: undefined } true
// });
// myEmitter1.emit('event', 'a', 'b');
// myEmitter1.emit('event', 'c', 'd');

const myEmitter2 = new MyEmitter();
myEmitter2.on('event', (a, b) => {
  console.log(a, b, this);
  // 打印: a b {}
});
myEmitter2.emit('event', 'a', 'b');