/*
 * @Author: your name
 * @Date: 2022-05-06 11:02:00
 * @LastEditTime: 2022-05-30 15:05:06
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /gajumakr/glcode-vite/src/components/pythonSkulpt/index.jsx
 */

import React from "react"
import "./index.scss"
import ovhidden from 'public/img/ovhidden.svg'
import ovhiopen from 'public/img/ovhiopen.svg'
import clearing from 'public/img/clearing.svg'
import { useSetState } from "ahooks"
// import {onedemo,twodemo,threedemo} from "../../redux-toolkit"

const PythonSkulpt = () => {

    
    const [state,setState] = useSetState({
            svgopen:true
    })
    
    const handleClear = () => {
        console.log("清除")
    }
    
    const handleOpenModal = () => {

        
        setState({
        svgopen:!state.svgopen
        })
        
        
    }
    return (
        <div className={ `pythonSkulptHome ${state.svgopen?"openheight":"hiddneheight"}` }>
            <div className="pytonhData">
                <p> 运行窗口</p>
                <div className="pytonhDatafitsda">
                    <div className="pytonhDatafitList" onClick={handleClear}>
                        <img src={ clearing} alt="" />  清除
                    </div>
                    <p>|</p>
                    <div className="pytonhDatafitRight" onClick={handleOpenModal} >
                        <img src={ state.svgopen?ovhidden:ovhiopen} alt="" />
                    </div>
            </div>  
            </div>  
            <div>
            111
            
            </div>
                       
        </div>

)

}

export default PythonSkulpt