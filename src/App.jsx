/*
 * @Author: your name
 * @Date: 2022-04-22 11:30:19
 * @LastEditTime: 2022-04-29 09:49:35
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /mac/vite/vite-dmeo/src/App.jsx
 */
import { useEffect, useState,useMemo } from 'react'

import './App.css'
import './App.scss'

import {getListAPI} from 'utils/api';
import config  from "route/config.jsx"

import {
 BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import {
  RecoilRoot,
} from 'recoil';

import HeadContext from "@/components/headContext";
function App() {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    
    
    const newdemo = () => {

      
      getListAPI().then((res) => {
      
        console.log(res.data, '11')
      })
    
    }
    newdemo()

  
   
  }, [])
  



  return (
    <RecoilRoot>
      <HeadContext></HeadContext>
      <Router>
      <Switch>
        {config.map(
          ({path, component, ...routes}) => 
            <Route key={path} path={path} component={component} {...routes}
            />
        )}
      </Switch>
    </Router>
  </RecoilRoot>
  )
}

export default App
