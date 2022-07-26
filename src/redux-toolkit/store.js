/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-05-30 13:40:17
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-25 14:34:50
 * @FilePath: /gajumakr/glcode-vite/src/redux-toolkit/store.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { configureStore } from '@reduxjs/toolkit'
import counterSlice from "./counterSlice"
import { setupListeners } from '@reduxjs/toolkit/query'

import { getListAPI } from "../server/pythonServer"
export const store = configureStore({
    reducer: {
        counter: counterSlice,
        [getListAPI.reducerPath]: getListAPI.reducer
    },

    //添加api中间件启用缓存，无效，轮询，
    //和' rtk-query '的其他有用特性。
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(getListAPI.middleware),
})

//可选，但refetchOnFocus/refetchOnReconnect行为是必需的
//参见' setupListeners ' docs -接受一个可选的回调函数作为定制的第二个参数

setupListeners(store.dispatch)