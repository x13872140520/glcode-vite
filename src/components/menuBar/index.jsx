/*
 * @Author: your name
 * @Date: 2022-05-05 10:05:54
 * @LastEditTime: 2022-05-06 10:39:03
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /gajumakr/glcode-vite/src/components/menuBar/index.jsx
 */

import React, { useCallback } from 'react';
import "./index.scss"
import { Menu } from 'antd';

const MenuBar = () => {

    const items = [
        {
            label: "通用",
            key: "1",
            children: [
                {
                    label: "查看引导指向",
                    key:'first'
                }
            ],    
        }, {
           label: "帮助",
            key: "2",
            children: [
                {
                  label: "帮助文档",
                    key:'twofirst'
                }, {
                  label: "教育账号使用手册",
                    key:'twosecond'
                }, {
                   label: "编程手册",
                    key:'twothird'
                }, {
                   label: "设备使用手册",
                    key:'twofour'
                }
            ],    
        }, {
           label: "反馈",
            key: "3",
            children: [],    
        }, {
           label: "关于",
            key: "4",
            children: [],    
        }
    
    ]
    
    
    const handleMenuClick = useCallback(
    (e) => {
      console.log('click', e);
    }
    ,[])
    return (
        <div>
       <Menu onClick={handleMenuClick} style={{ width: 105 }} mode="vertical" items={items} />
        
        </div>
)


}
export default MenuBar