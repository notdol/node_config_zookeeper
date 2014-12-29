var C = require('./../module.js');
var zookeeper    = require('node-zookeeper-client'),
	config = require('./config.js');

var zkClient = zookeeper.createClient(config.addr, { retries : 2 });



C.setZKClient();


zkClient.once('connected', function () {
	C.setZKClient( zkClient , 'xpush');

	C.setConfig( "test1" , {data1: 'data1', data2: 'data2'}, function(err){
		console.log("=== setConfig : "+err);
	});



});

zkClient.connect();

