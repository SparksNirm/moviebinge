const jsonServer = require("json-server");
const server = jsonServer.create();
const path=require('path');
const express = require('express');
const router = jsonServer.router("./db.json");
const publicPath=path.join(__dirname,'build')
const middleware = jsonServer.defaults();
server.use("/db",middleware,router)
server.use(express.static(path.join(__dirname,'build')))
server.get("*",(req,res)=>{
  res.sendFile(path.join(publicPath,'index.html'))
})
const port = process.env.PORT || 8000;

server.listen(port, () =>
{
  console.log(publicPath);
  console.log(`Successfully started server on port: ${port}`)
}
);
