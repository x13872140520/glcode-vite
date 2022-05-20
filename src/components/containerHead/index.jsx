/*
 * @Author: your name
 * @Date: 2022-05-07 09:06:17
 * @LastEditTime: 2022-05-09 13:00:57
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /gajumakr/glcode-vite/src/components/containerHead/index.jsx
 */
import React, { forwardRef} from 'react';
import './index.scss'

const ContainerHead = (props) => {

    return (

          
               <ul className="containerHeadHome">
            <li
                    onClick={props.handleNewClick}
                className="containerHeadfitstLi">运行</li>
            <li>库管理</li>
            <li>日志</li>
            <li></li>
            <li></li>
            <li></li>
            </ul>      
            )
            



}
export default ContainerHead