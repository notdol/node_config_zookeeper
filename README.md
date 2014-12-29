node_config_zookeeper
=====================

**This Module is config management use zookeeper for nodejs.**

## Getting Started 
connect with zookeeper client ( node-zookeeper-client module );

```html
var zookeeper    = require('node-zookeeper-client'),
    addr = 'localhost:2181';

var zkClient = zookeeper.createClient(addr, { retries : 2 });
var C = require('./node_config_zookeeper');

C.setZKClient( zkClient , {{SERVICE_NAME}} );
```

## Documentation

### SET CONFIGURATION

```html
C.setConfig( 'configKey', { data1 : 'value1', data2 : 'value2'});
```
### GET CONFIGURATION

```html
C.getConfig( 'configKey', function(data){
    console.log(data);
    // data.data1 -> value1
    // data.data2 -> value2
});
```
### LISTEN CONFIGURATION IS CHANGED

```html
C.on( 'configKey', function(data){
    console.log(data);
    // data.data1 -> value1
    // data.data2 -> value2
});
```


