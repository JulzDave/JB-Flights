import io from 'socket.io-client';
const  socket = io('http://localhost:8000');
// socket.on('data', msg => console.log(msg));

function subscribeToData(cb) {
  socket.on('data', timestamp => cb(null, timestamp));
  socket.emit('subscribeToData', 100);
}
export { subscribeToData };

