/*
 * @Author: your name
 * @Date: 2022-04-24 15:29:20
 * @LastEditTime: 2022-08-16 09:48:14
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /mac/vite/vite-dmeo/src/page/home/index.js
 */

import React,{useEffect,useState} from "react";
import "./index.scss"
import { Button} from "antd"
import message from "@/components/messageBox"
const codeLab = () => {
    const handleHomeClick = () => {
    console.log(1)
        message.success({context:222})
    }
    useEffect(()=>{
      console.log('codemi',CodeMirror)
        // var myCodeMirror = CodeMirror(document.getElementById('codeLab'),{
        //     value: "# version: Python3\n",
        //     mode:  "javascript",
        //     // styleActiveLine: true,
        //     lineNumbers: true,
        //     indentUnit:'8',
        //     tabSize:'6',
        //     theme:'xq-light'
        //   });
         
         
         
    },[])
    return (
        <div>
            <div  className="header">
                <img src="/src/logo.svg" alt="" />
            </div>
            <div id="codeLab"></div>
        </div>
    )
    

}
export default codeLab