var globalConfig = require('./module.js');

var zookeeper    = require('node-zookeeper-client'),
	addr = 'localhost:2181';

var zkClient = zookeeper.createClient(addr, { retries : 2 });


// 1. setClient

// is alreay connected
// not connected




zkClient.once('connected', function () {
	console.log("===== connected");
	globalConfig.setZKClient( zkClient , 'xpush');

	globalConfig.setConfig('test',{a:'a', b:'b'});
	console.log( globalConfig.getConfig('test') );

	globalConfig.__getConfigKeyList(function(){
		console.log(arguments);
	})
});

zkClient.connect();


setTimeout(function(){

},1000000);

