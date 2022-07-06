const jsonServer = require("json-server");
const server = jsonServer.create();
const path=require('path');
const router = jsonServer.router("./db.json");
const publicPath=path.join(__dirname,'/build')
const middleware = jsonServer.defaults({ static: "./build" });

server.get("*",(req,res)=>{
  res.sendFile(path.join(publicPath,'index.html'))
})
const port = process.env.PORT || 8000;

server.use(middleware);
server.use(router);

server.listen(port, () =>
  console.log(`Successfully started server on port: ${port}`)
);
