/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-05-20 15:06:53
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-05-30 13:45:47
 * @FilePath: /gajumakr/glcode-vite/src/main.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import './index.css'
import 'babel-polyfill';
import 'antd/dist/antd.css';
import { store } from "./redux-toolkit/store";
import { enableMapSet } from "immer"

enableMapSet()
ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={ store}>
 <App />
</Provider>
   
)
