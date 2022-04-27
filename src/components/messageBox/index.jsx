/*
 * @Author: your name
 * @Date: 2022-04-26 13:17:08
 * @LastEditTime: 2022-04-26 15:27:25
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /mac/vite/vite-dmeo/src/components/messageBox/index.js
 */
import { useEffect} from "react";
import React from "react";
import ReactDOM from 'react-dom/client'
import { unmountComponentAtNode } from "react-dom";
import "./index.scss"

const MessageIcon = (t) => new Map([
    [
        "error",
        "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636",
    ],
    [
        "success",
        "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z",
    ],
    [
        "warning",
        "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
    ],
    ["info", "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"],
]).get(t)



const MessageBox = ({ icon, context, type = "success", onClose }) => {
   useEffect(() => {
        const t = setTimeout(onClose, 3000);
        return () => {
            t && clearTimeout(t);
        };
    }, []);


    return (
        <div className={`cl${type}`} onClick={onClose}>
            <div className="boxflex">
                {icon || (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="w-6 h-6 mx-2 stroke-current"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={MessageIcon(type)}
                        />
                    </svg>
                )}

            </div>
            <p>{context}</p>
        </div>

    )

}


const getContainer = () => {
    // 接下来是操作dom了
    const container = document.querySelector("#cuseMessager")
    if (!container) {
        const newcontainer = document.createElement("div")
        newcontainer.id = "cuseMessager"
        document.body.appendChild(newcontainer)
        return newcontainer

    }
    return container

}

const MessageNew = (type) => (props) => {
    const Container = getContainer()
    const _dom = document.createElement("div");

    Container.appendChild(_dom);

    const hanldeClose = () => {
        //删除dom
        unmountComponentAtNode(_dom);
     
        Container.removeChild(Container.firstChild);
    };

 ReactDOM.createRoot(document.getElementById("cuseMessager")).render(
        <MessageBox
            {...props}
            type={type}
            onClose={hanldeClose}
        ></MessageBox>,
       
    )

}

//高阶组件
const error = MessageNew("error");
const warning = MessageNew("warning");
const success = MessageNew("success");
const info = MessageNew("info");



export default {
    error,
    warning,
    success,
    info,
};

