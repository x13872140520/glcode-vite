/*
 * @Author: your name
 * @Date: 2022-04-24 15:29:20
 * @LastEditTime: 2022-05-30 14:34:52
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /mac/vite/vite-dmeo/src/page/home/index.js
 */

import React, { useMemo, useRef, useEffect } from "react";
import { Button } from "antd";

import message from "@/components/messageBox";
import CodeMirror from "@/components/codeMirror";
import PythonSkulpt from "@/components/pythonSkulpt";
import ContainerHead from "@/components/containerHead";
import { ThemeContext } from "recoils/crearContext.jsx";
import { useSetState } from "ahooks";
import Test from "@/components/test";
import DictionAries from "@/components/dictionAries";
import "./index.scss";
import { Func } from "utils/static.js";
const Home = () => {
  const newRef = useRef(null);

  const [state, setState] = useSetState({
    hello: "",
    count: 0,
  });

  const handleHomeClick = () => {
    message.success({ context: 111 });
  };

  const handleNewClick = () => {
    newRef.current.handlenew();
  };

  const colorfn = (color) => {
    console.log(color);
  };

  const newarray = [
    {
      timer: 3000,
      fn: () => colorfn("red"),
    },
    {
      timer: 3000,
      fn: () => colorfn("green"),
    },
    {
      timer: 3000,
      fn: () => colorfn("block"),
    },
  ];
  useEffect(() => {
    Func.EventLooper(newarray);
  }, []);

  return (
    <ThemeContext.Provider value={state}>
      {/* 头部 */}
      <Test></Test>
      <ContainerHead handleNewClick={handleNewClick}></ContainerHead>
      <div className="layutFLex">
        {/* python字典 */}
        <div className="layutFLexLeft">
          <DictionAries></DictionAries>
        </div>
        <div className="layutFLexRight">
          {/* web编辑器 */}
          <div className="layutFLexRightTop">
            <CodeMirror ref={newRef}></CodeMirror>
          </div>

          {/* python运行工具 */}
          <div className="layutFLexRightBottom">
            <PythonSkulpt></PythonSkulpt>
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};
export default Home;
