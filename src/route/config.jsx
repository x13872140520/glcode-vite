/*
 * @Author: your name
 * @Date: 2022-04-24 13:58:50
 * @LastEditTime: 2022-04-28 09:33:13
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /mac/vite/vite-dmeo/src/route/config.js
 */
import React from 'react';

//优化文件体积
let Home = React.lazy(()=>import("page/home/index"))

let NotFound = React.lazy(() => import("page/notFonund/index"))




const Configs = [
    {
        path: '/',
        exact: true,
        component: Home,
        role: 'user',       // 当前路由需要的角色权限
        backUrl: '/login'   // 不满足权限跳转的路由
    },
    {
        path: '*',
        component: NotFound
    }
]

export default Configs
