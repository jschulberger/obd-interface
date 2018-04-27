const redis = require('redis');


// Redis Declarations
var redcli = redis.createClient("/tmp/redis.sock");
redcli.on("error", function (err) {
    console.log("[Redis] " + err);
});

var msg = "Hello World!";
console.log(msg);

// method for connecting to redis
// method for checking redis
// method for connecting to obd port
// method for checking obd port
// method for getting obdkeys from redis
// method for splitting obdkeys
// method for adding pollers for each obd value
// method for
