const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");

const server = jsonServer.create();
const router = jsonServer.router("db.json"); // 這裡是你的數據庫文件
const middlewares = jsonServer.defaults();

server.db = router.db;

server.use(middlewares);
server.use(cors()); // 添加 CORS 支持
server.use(auth); // 添加 auth 支持
server.use(router);

server.listen(3000, () => {
  console.log("JSON Server is running on port 3000");
});
