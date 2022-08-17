/*
 * @Author: your name
 * @Date: 2022-05-06 11:02:00
 * @LastEditTime: 2022-07-28 16:30:16
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /gajumakr/glcode-vite/src/components/pythonSkulpt/index.jsx
 */

import React, { useEffect } from "react";
import "./index.scss";
import ovhidden from "public/img/ovhidden.svg";
import ovhiopen from "public/img/ovhiopen.svg";
import clearing from "public/img/clearing.svg";
import { useSetState } from "ahooks";
import { Button } from "antd";
import { onedemo, twodemo, threedemo } from "../../redux-toolkit/counterSlice";
import { loadDataEnd, getList } from "../../redux-toolkit/createAsyncThunk";
import { useSelector, useDispatch } from "react-redux";
import { useGegetListByNameQuery, getListAPI } from "../../server/pythonServer";

function ComponentOne() {
  // component subscribes to the data
  const { data } = getListAPI.endpoints.getListByName.useQuery("/");
  console.log(data);
  return <div>...</div>;
}

function ComponentTwo() {
  // component subscribes to the data
  const { data } = getListAPI.endpoints.getListByName.useQuery("/");
  console.log(data);
  return <div>...</div>;
}

function ComponentThree() {
  // component subscribes to the data
  const { data } = getListAPI.endpoints.getListByName.useQuery("/");
  console.log(data);
  return <div>...</div>;
}

function ComponentFour() {
  // component subscribes to the *same* data as ComponentThree,
  // as it has the same query parameters
  const { data } = getListAPI.endpoints.getListByName.useQuery("/");
  console.log(data);
  return <div>...</div>;
}

const PythonSkulpt = () => {
  const { value, result } = useSelector((state) => state.counter);
  const { list } = useSelector((state) => state.listCounter);
  // 通过useDispatch 派发事件
  const dispatch = useDispatch();

  const { data, error, isLoading } =
    getListAPI.endpoints.getListByName.useQuery("/");
  // const { data, error, isLoading } = useGegetListByNameQuery("bulbasaur")

  const [state, setState] = useSetState({
    svgopen: true,
  });

  const handleClear = () => {
    console.log("清除");
  };

  const handleOpenModal = () => {
    setState({
      svgopen: !state.svgopen,
    });
  };
  console.log("mytest");
  console.log(value, list, result);

  return (
    <div
      className={`pythonSkulptHome ${
        state.svgopen ? "openheight" : "hiddneheight"
      }`}
    >
      <div className="pytonhData">
        <p> 运行窗口</p>
        <div className="pytonhDatafitsda">
          <div className="pytonhDatafitList" onClick={handleClear}>
            <img src={clearing} alt="" /> 清除
          </div>
          <p>|</p>
          <div className="pytonhDatafitRight" onClick={handleOpenModal}>
            <img src={state.svgopen ? ovhidden : ovhiopen} alt="" />
          </div>
        </div>
      </div>
      <div>{result}</div>
      {/* <Button onClick={() => dispatch(onedemo(1))}>
                +1
            </Button>
            <Button onClick={() => dispatch(twodemo())}>
                -1
            </Button>
            <Button onClick={() => dispatch(threedemo(20))}>
                20
            </Button>
            <Button onClick={() => dispatch(loadDataEnd(11))}>
                xx
            </Button>
            <Button onClick={() => dispatch(getList())}>
                xxcc
            </Button> */}
      {/* <ComponentOne></ComponentOne>
            <ComponentTwo></ComponentTwo>
            <ComponentThree></ComponentThree>
            <ComponentFour></ComponentFour> */}
    </div>
  );
};

export default PythonSkulpt;
