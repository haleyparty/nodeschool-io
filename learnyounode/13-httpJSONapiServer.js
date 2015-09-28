http = require('http');
url = require('url');

http.createServer(function(request, response) {
  var urlObject = url.parse(request.url, true);
  var pathName = urlObject.pathname;
  var strtime = urlObject.query.iso;
  var result;

  if (pathName === '/api/unixtime') {
    result = getUnixTimeStamp(strtime);
  } else if (pathName === '/api/parsetime') {
    result = getTimeObj(strtime);
  }

  if (result) {
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify(result));
  } else {
    response.writeHead(404);
    response.end();
  }
  
}).listen(process.argv[2]);

function getUnixTimeStamp(strtime) {
  return {
    unixtime: getTimeStamp(strtime)
  };
}

function getTimeStamp(strtime) {
  return Date.parse(strtime);
}

function getTimeObj(strtime) {
  var date = new Date(getTimeStamp(strtime));

  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  };
}
