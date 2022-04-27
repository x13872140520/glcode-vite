/*
 * @Author: your name
 * @Date: 2022-04-22 14:23:34
 * @LastEditTime: 2022-04-22 15:09:12
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /mac/vite/vite-dmeo/src/express/get.js
 */

const express = require('express');

const app = express()
const fs = require("fs");
const port = 10086
const path = require('path')


app.get("*", function (req, res, next) {
    //设置跨域访问
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", " 3.2.1");
    res.header("Content-Type", "application/json;charset=utf-8");

    next();
});

let data = [
    { key: 1, value: "aa" }, { key: 2, value: "b" }, { key: 3, value: "cc" }
]


app.get('/', (req, res) => {
    res.send(data)
})

app.get('/list', (req, res) => {
    console.log(req)
    res.header("Content-Type", 'image/jpeg');
    res.sendFile(path.join(__dirname, 'express/img/1.jpeg'))
})



app.listen(port, '127.0.0.1', () => {
    console.log("起服务了")
})