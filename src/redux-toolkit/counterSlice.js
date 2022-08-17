/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-05-30 13:59:07
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-27 16:59:53
 * @FilePath: /gajumakr/glcode-vite/src/redux-toolkit/counterSlice.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createSlice } from '@reduxjs/toolkit'




//这是一个简单的状态管理
export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0,
        result:'hello python'
    },
    reducers: {
        changePythonResult: (state, action) => { 
            state.result = action.payload
        },
        onedemo: (state) => {

            state.value += 1
        },
        twodemo: (state) => {
            state.value -= 1
        },
        threedemo: (state, action) => {
            state.value += action.payload
        }

    }
})
export const { onedemo, twodemo, threedemo,changePythonResult } = counterSlice.actions

export default counterSlice.reducer
