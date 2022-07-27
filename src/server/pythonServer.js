/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-25 11:20:39
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-27 14:34:20
 * @FilePath: /gajumakr/glcode-vite/src/server/pythonServer.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { CreatAxios } from 'utils/request'
import { createApi, retry } from '@reduxjs/toolkit/query/react'

import Axios from 'axios'
import { message } from 'antd';


// 错误状态码

const httpErrorStatusHandle = (error) => {

    let messagetitle = ""
    if (error && error.response) {
        switch (error.response.status) {
            case 302: messagetitle = '接口重定向了！'; break;
            case 400: messagetitle = '参数不正确！'; break;
            case 401: messagetitle = '您未登录，或者登录已经超时，请先登录！'; break;
            case 403: messagetitle = '您没有权限操作！'; break;
            case 404: messagetitle = `请求地址出错: ${error.response.config.url}`; break; // 在正确域名下
            case 408: messagetitle = '请求超时！'; break;
            case 409: messagetitle = '系统已存在相同数据！'; break;
            case 500: messagetitle = '服务器内部错误！'; break;
            case 501: messagetitle = '服务未实现！'; break;
            case 502: messagetitle = '网关错误！'; break;
            case 503: messagetitle = '服务不可用！'; break;
            case 504: messagetitle = '服务暂时无法访问，请稍后再试！'; break;
            case 505: messagetitle = 'HTTP版本不受支持！'; break;
            default: messagetitle = '异常问题，请联系管理员！'; break
        }
        if (error.message.includes('timeout')) messagetitle = '网络请求超时！';
        if (error.message.includes('Network')) messagetitle = window.navigator.onLine ? '服务端异常！' : '您断网了！';

        message.error(messagetitle)
    }


}


//重新封装一个


const HttpProxy = ({ baseUrl } = { baseUrl: '' }) => async ({ url, method, data, params }) => {
    try {
        const result = await Axios({ url: baseUrl + url, method, data, params })
        return { data: result.data }
    } catch (axiosError) {
        let err = axiosError
        return httpErrorStatusHandle(err)
    }
}




// Redux Toolkit


export const getListAPI = createApi({
    reducerPath: "getListAPI",

    baseQuery: retry(HttpProxy({
        baseUrl: 'http://localhost:10086/',
    }), {
        maxRetries: 5,
    }),
    refetchOnFocus: true,       //切屏自动获取
    refetchOnReconnect: true,  //断网查询
    tagTypes: ['Post', 'User'],  //根据这里面参数决定是否重新获取
    endpoints: (builder) => ({

        getListByName: builder.query({
            query: () => ({ url: '', method: 'get' }),
            keepUnusedDataFor: 5,   //指定在订阅者引用计数达到零后数据应在缓存中保留多长时间
            transformResponse: (response) => {
                return response

            },
            // invalidatesTags: ['Post'],
            //  providesTags: ['Post'],
        }),
        // 另外一个接口
        getOther: builder.query({
            query: () => ({ url: '/', method: 'post' }),
            keepUnusedDataFor: 5,   //指定在订阅者引用计数达到零后数据应在缓存中保留多长时间
            transformResponse: (response) => {
                return response

            },
            // invalidatesTags: ['Post'],
            //  providesTags: ['Post'],
        }),


    })



})


export const { useGegetListByNameQuery } = getListAPI