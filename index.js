var globalConfig = require('./module.js');

var zookeeper    = require('node-zookeeper-client'),
	addr = 'localhost:2181';

var zkClient = zookeeper.createClient(addr, { retries : 2 });




globalConfig.setZKClient( zkClient );
