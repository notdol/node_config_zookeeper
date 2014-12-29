var globalConfig = require('./module.js');

var zookeeper    = require('node-zookeeper-client'),
	addr = 'localhost:2181';

var zkClient = zookeeper.createClient(addr, { retries : 2 });

zkClient.once('connected', function () {
	console.log("===== connected");
	globalConfig.setZKClient( zkClient , 'xpush');

	setTimeout(function(){
		globalConfig.setConfig('test',{c:'c', d:'d'});
		console.log( globalConfig.getConfig('test') );

	},5000)

	globalConfig.on('test',function(data){
		console.log("==== receive event :"+data);

	})
});

zkClient.connect();


setTimeout(function(){

},1000000);