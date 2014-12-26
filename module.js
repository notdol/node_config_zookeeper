var EventEmitter = require('events').EventEmitter;
var util = require('util');

/** base znode for the xpush server lists. **/
var CONSTANTS = {
	BASE_ZNODE_PATH : '/xpush',
	SERVERS_PATH    : '/servers',
	META_PATH       : '/meta',
	APP_PATH        : '/app',
	GW_SERVER_PATH  : '/session',
	CONFIG_PATH : '/config'
};

var Configure = function(){

};

Configure.prototype.setZKClient = function(client){
	this.zkClient = client;
	this._initListenEvent();	
};

Configure.prototype._initListenEvent = function(){
	var self = this;
	self.zkClient.exists(
		CONSTANTS.BASE_ZNODE_PATH+CONFIG_PATH,
		function (error, stat) {
			if (error) {
				console.log(error.stack);
				return;
			}
		});

};

Configure.prototype._setConfig = function(){

};

Configure.prototype._getConfig = function(){

};

Configure.prototype._watchConfig = function(){

}

util.inherits(Configure, EventEmitter);

var config = new Configure();

module.exports = config;