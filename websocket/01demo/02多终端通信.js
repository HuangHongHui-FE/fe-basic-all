// 02多终端通信.js
// 引入websocket server模块
var WebSocketServer = require('websocket').server

// 引入http模块，搭建http服务器
var http = require('http')

var server = http.createServer();
server.listen(4000, function(){
	console.log('服务器搭建成功');
})

// 储存所有终端的连接
var clients = [];

// 创建websocket服务对象
// new WebSocketServer([serverConfig])
var wsServer = new WebSocketServer({httpServer: server});

// 监听连接请求，建立连接
wsServer.on('request', function(webSocketRequest){
	// 当前连接 回话
	var connnection = webSocketRequest.accept(null, 'accepted-origin')

	// 把连接添加到终端
	clients.push(connnection)


	// 定时向客户端发送信息
	// setInterval(function(){
	// 	connnection.sendUTF('hello world' + (new Date()))
	// }, 1000)


	// 监听客户端发送过来的消息
	connnection.on('message', function(msg){
		// 当前传输的是utf-8的数据
		if(msg.type == 'utf8'){
			// 给每一个连接传数据
			clients.forEach(function(item){
				item.sendUTF(msg.utf8Data)
			})
		}
	})

	// 当连接断开时，触发事件
	connnection.on('close', function(reasonCode, description){
		console.log("断开了一个连接")
		// 获取当前索引
		var index = clients.indexOf(connnection);
		// 删除
		clients.splice(index, 1);
	})
})