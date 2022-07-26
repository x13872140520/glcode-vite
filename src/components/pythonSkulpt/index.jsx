/*
 * @Author: your name
 * @Date: 2022-05-06 11:02:00
 * @LastEditTime: 2022-07-25 14:48:39
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /gajumakr/glcode-vite/src/components/pythonSkulpt/index.jsx
 */

import React, { useEffect } from "react"
import "./index.scss"
import ovhidden from 'public/img/ovhidden.svg'
import ovhiopen from 'public/img/ovhiopen.svg'
import clearing from 'public/img/clearing.svg'
import { useSetState } from "ahooks"
import { onedemo, twodemo, threedemo } from "../../redux-toolkit/counterSlice"
import { useSelector, useDispatch } from 'react-redux'
import { useGegetListByNameQuery, getListAPI } from '../../server/pythonServer'

const PythonSkulpt = () => {


    const { data, error, isLoading } = getListAPI.endpoints.getListByName.useQuery('/')
    // const { data, error, isLoading } = useGegetListByNameQuery("bulbasaur")

    const [state, setState] = useSetState({
        svgopen: true
    })

    const handleClear = () => {
        console.log("清除")
    }

    const handleOpenModal = () => {


        setState({
            svgopen: !state.svgopen
        })


    }
    console.log(data, error, isLoading, getListAPI)



    return (
        <div className={`pythonSkulptHome ${state.svgopen ? "openheight" : "hiddneheight"}`}>
            <div className="pytonhData">
                <p> 运行窗口</p>
                <div className="pytonhDatafitsda">
                    <div className="pytonhDatafitList" onClick={handleClear}>
                        <img src={clearing} alt="" />  清除
                    </div>
                    <p>|</p>
                    <div className="pytonhDatafitRight" onClick={handleOpenModal} >
                        <img src={state.svgopen ? ovhidden : ovhiopen} alt="" />
                    </div>
                </div>
            </div>
            <div>
                1
            </div>

        </div>

    )

}

export default PythonSkulpt