var net = require('net');
var server = net.createServer(function(socket) {
  socket.end(getFormattedTime() + '\n');
});

server.listen(process.argv[2]);

function getFormattedTime() {
  var now = new Date();

  return [now.getFullYear(), formatNumber(now.getMonth() + 1), formatNumber(now.getDate())].join('-')
        + ' ' + [formatNumber(now.getHours()), formatNumber(now.getMinutes())].join(':');
}

function formatNumber(number) {
  return number < 10 ? '0' + number : number;
}