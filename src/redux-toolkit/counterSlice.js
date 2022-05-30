/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-05-30 13:59:07
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-05-30 15:08:23
 * @FilePath: /gajumakr/glcode-vite/src/redux-toolkit/counterSlice.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createSlice } from '@reduxjs/toolkit'



export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0
    },
    reducers: {
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
export const { onedemo, twodemo, threedemo } = counterSlice.actions

export default counterSlice.reducer
