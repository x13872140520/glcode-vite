/*
 * @Author: your name
 * @Date: 2022-04-29 09:32:00
 * @LastEditTime: 2022-05-06 09:30:12
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /gajumakr/glcode-vite/src/components/headContext/index.jsx
 */

import React, { useRef } from 'react';
import "./index.scss"
import genduo from 'public/img/genduo.svg'
import shouye from 'public/img/shouye.svg'
import yuyan from 'public/img/yuyan.svg'
import { useSetState,useHover } from 'ahooks'

import MenuBar from "@/components/menuBar/index.jsx"
const HeadContent = () => {
  const [state, setState] = useSetState({
    count:false,
  });

    const handlemouse = () => {
       let newcount=!state.count
        
      setState({
            count:newcount
            })
    }
    
const ref = useRef(null);
  const isHovering = useHover(ref);
 
    
    return (
        <ul className="HeadContent">
            <li>
                <div className="HeadContentLogo">
                    logo
                </div>
            </li>
            <li>
                <div className="HeadContentFlex">
                    <p>实验室</p>
                    <div 
                     onClick={handlemouse}   
                    className="HeadContentFlexLi"
                    >
                        <img 
                            src={genduo} alt="" />
                        <div
                      className="HeadContentRelative">
                           {
            state.count&& <MenuBar></MenuBar>
            }
                        </div>
                    </div>
                    <p>
                        <img src={ shouye} alt="" />
                    </p>
                </div>
            </li>
            <li>
                <div className="HeadContenMenu">
                
                
                </div>
            </li>
            <li>
              <div className="HeadContenText">
                
                </div>
            </li>
            <li>
            
            i18n
            </li>
                <li> 
           登陆
            </li>
            
        
         
        </ul>

)

}

export default HeadContent