const redis = require("redis");
//创建redisClient端时若无传参则连接本地redis
//每create一次，就相当于打开一次redis.exe即一个窗口  
const client = redis.createClient();
 
client.on("error", function(error) {
  console.error(error);
});
 //操作redis  
// client.set("aaa", "verygood", redis.print);
client.get("aaa", redis.print);