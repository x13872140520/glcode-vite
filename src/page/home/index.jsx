/*
 * @Author: your name
 * @Date: 2022-04-24 15:29:20
 * @LastEditTime: 2022-04-26 15:10:42
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /mac/vite/vite-dmeo/src/page/home/index.js
 */

import React from "react";
import { Button} from "antd"

import message from "@/components/messageBox"
const Home = () => {

    

    
    const handleHomeClick = () => {
    console.log(1)
        message.success({context:111})
    }
    
    
    return (
        <div>home
                
        <Button type="primary" onClick={handleHomeClick}>aa</Button>
        </div>
    )


}
export default Home