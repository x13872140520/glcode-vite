/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-28 10:08:54
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-28 11:05:53
 * @FilePath: /gajumakr/glcode-vite/src/redux-toolkit/createAsyncThunk.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { onedemo, twodemo, threedemo } from "./counterSlice"

const initialState = {
    list: [],

};

//调用接口的地方
// 请求电影列表
const getuserList = () =>
    fetch(
        'http://localhost:10086/'
    ).then(res => res.json())



export const getList = createAsyncThunk('list/Getlist',
    async () => {
        const res = await getuserList();
        return res;
    }
);


const getListSec = createSlice({
    name: 'getListSec',
    initialState,
    reducers: {
        loadDataEnd: (state, { payload }) => {
            // state.list = [{ key: 1 }, ...payload]

            state.list.push(payload)
        },
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(onedemo, (state, action) => {
            console.log(action, state, "??", '这是其他状态的组件')

        })
            .addCase(getList.pending, (state) => {
                console.log("🚀 ~ 进行中！", state)
            })
            .addCase(getList.fulfilled, (state, { payload }) => {
                console.log(state.list, payload)
                state.list = payload
            })
            .addCase(getList.rejected, (state, err) => {
                console.log("🚀 ~ rejected", state, err)
            });


    },
})
// 导出方法
export const { loadDataEnd } = getListSec.actions;

// 默认导出
export default getListSec.reducer;