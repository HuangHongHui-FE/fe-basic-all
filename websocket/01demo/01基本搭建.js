var WebSocketServer = require('websocket').server;
var http = require('http');

// 创建服务器
var server = http.createServer(function(request, response) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.writeHead(404);
    response.end();
});
server.listen(3000, function() {
    console.log((new Date()) + ' Server is listening on port 3000');
});

// 创建websocket服务器
wsServer = new WebSocketServer({
    httpServer: server,  // 上面创建的服务器放进来
});

// 什么认证
// function originIsAllowed(origin) {
//   // put logic here to detect whether the specified origin is allowed.
//   return true;
// }

// websocket建立连接
wsServer.on('request', function(request) {
    // if (!originIsAllowed(request.origin)) {
    //   // Make sure we only accept requests from an allowed origin
    //   request.reject();
    //   console.log((new Date()) + ' Connection from origin ' + request.origin + ' rejected.');
    //   return;
    // }
    

    // 当前的连接, 协议为null
    var connection = request.accept(null, request.origin);

    setInterval(function(){
        connection.sendUTF('服务端发送消息'+ (new Date()));
    },5000);

    console.log((new Date()) + '已经建立连接');

    // 监听当前连接，当有信息的时候，前端发送过来的数据
    connection.on('message', function(message) {
        if (message.type === 'utf8') {
            console.log('Received Message: ' + message.utf8Data);
            connection.sendUTF(message.utf8Data);
        }
        else if (message.type === 'binary') {
            console.log('Received Binary Message of ' + message.binaryData.length + ' bytes');
            connection.sendBytes(message.binaryData);
        }
    });

    // 监听当前连接，当关闭的时候
    connection.on('close', function(reasonCode, description) {
        console.log((new Date()) + ' Peer ' + connection.remoteAddress + '断开连接');
    });
});