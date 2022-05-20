import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'babel-polyfill';
import 'antd/dist/antd.css';
import {enableMapSet} from "immer"
enableMapSet()
ReactDOM.createRoot(document.getElementById('root')).render(

    <App />

)
