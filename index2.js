var globalConfig = require('./module.js');
var index3 = require('./index3.js');

var zookeeper    = require('node-zookeeper-client'),
	addr = 'localhost:2181';

var zkClient = zookeeper.createClient(addr, { retries : 2 });

zkClient.once('connected', function () {
	console.log("===== connected");
	globalConfig.setZKClient( zkClient , 'xpush');
	//globalConfig.setConfig('test',{c:'c', d:'d'});

	globalConfig.on('test',function(data){
		console.log("==== receive event :"+data);
	})
	//console.log( globalConfig.getConfig('test') );
});

//zkClient.connect();

setTimeout(function(){
},1000000);