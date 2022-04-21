#!/usr/bin/env node

// include `express`, you can use `import` now
// 載入 `express`, 現在可以放心使用 `import` 了
import express from 'express'
// const express = require('express')

import { dirname } from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// create an express, aka web server, instance
// 建立一個 express (也就是網頁伺服器)實體
const app = express()
const port = 7001
app.get('/signup', (req, res) =>{
  var data=req
  var datatoadd={};
  datatoadd[data.query.account]['username']=req.query.username
  datatoadd[data.query.account]['password']=req.query.password
  datatoadd[data.query.account]['email']=req.query.email
  datatoadd=JSON.stringify(datatoadd, null, '\t')  
  fs.writefile('./userdata.json',datatoadd, err=>{
    if(err) console.log(err)
    else{
      res.send('adding successful')
    }
  //res.send(`${req.query.username}`)
})
})

// start the server
// 啟動伺服器
app.listen(port, () => {
  console.log(`listening on port: ${port}`)
})

app.use(express.static(`${__dirname}`))