/*
 * @Author: your name
 * @Date: 2022-05-10 14:21:38
 * @LastEditTime: 2022-05-13 10:18:59
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /gajumakr/glcode-vite/src/components/dictionAries/index.js
 */
import { Input, Space,Tooltip,Tree, Switch } from 'antd';
import React from 'react';
const { Search } = Input
import "./index.scss"
import { useSetState } from 'ahooks'; 
import hidden from "public/img/hidden.svg"
import opendor from "public/img/opendor.svg"

import { CarryOutOutlined, FormOutlined } from '@ant-design/icons';
const treeData = [
{
    title: 'dobot Magician',
    key: '0-0',
        icon: <CarryOutOutlined />,
    props:1,
    children: [
      {
        title: '点到点运动',
            key: '0-0-0',
         props:"magician.set_device_withl(enable=True, version=0)",
        icon: <CarryOutOutlined />,
       isLeaf: true
      },
      {
        title: '设置滑轨开关及版本',
          key: '0-0-1',
             props:"magician.set_ptpl_params(vel=50, accel=50)",
          icon: <CarryOutOutlined />,
         isLeaf: true
      
      },
          {
        title: '滑动点到点运动速度比例',
        key: '0-0-2',
              icon: <CarryOutOutlined />,
         isLeaf: true
      
      },
    ],
  },
  {
    title: 'parent 2',
    key: '0-1',
    icon: <CarryOutOutlined />,
      children: [
      {
        title: 'parent 1-0',
        key: '0-1-0',
        icon: <CarryOutOutlined />,
      
         isLeaf: true
      },
      {
        title: 'parent 1-1',
        key: '0-1-1',
        icon: <CarryOutOutlined />,
       isLeaf: true
      },
          {
        title: 'parent 1-2',
        key: '0-1-2',
        icon: <CarryOutOutlined />,
       isLeaf: true
      },
    ],
    },
   {
    title: 'parent 3',
    key: '0-2',
    icon: <CarryOutOutlined />,
      children: [
      {
        title: 'parent 1-0',
        key: '0-2-0',
        icon: <CarryOutOutlined />,
      
      },
      {
        title: 'parent 1-1',
        key: '0-2-1',
        icon: <CarryOutOutlined />,
      
      },
          {
        title: 'parent 1-2',
        key: '0-2-2',
        icon: <CarryOutOutlined />,
      
      },
    ],
    },
   {
    title: 'parent 4',
    key: '0-3',
    icon: <CarryOutOutlined />,
      children: [
      {
        title: 'parent 1-0',
        key: '0-3-0',
        icon: <CarryOutOutlined />,
       isLeaf: true
      },
      {
        title: 'parent 1-1',
        key: '0-3-1',
        icon: <CarryOutOutlined />,
       isLeaf: true
      },
          {
        title: 'parent 1-2',
        key: '0-3-2',
        icon: <CarryOutOutlined />,
       isLeaf: true
      },
    ],
  },
]

const DictionAries = () => {


    const [data,setData] = useSetState({
        tootip: "隐藏所有的指令",
      setkey: false,
      expandedKeys: [],
      searchValue: "",
        autoExpandParent:true,
        
    })
    
      const onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };
    
    const handleSetClick = () => {
    
        
        let newsetkey = !data.setkey

        setData({
            tootip: newsetkey?"展开所有的指令":"隐藏所有的指令",
            setkey:newsetkey
        })
    }
    // 处理下原始数据
    const dataList = []
    
    const genrFilterList =data => {
        for (let i = 0; i < data.length; i++) {
          const node = data[i]
            const { key,title } = node
            dataList.push({ key, title: title })
            if (node.children) {
            
            genrFilterList(node.children)
            }
        }
    
    
    }
    
    //  处理下树结构
  const getPar = (key,tree) => {

  let parentKey;
  for (let i = 0; i < tree.length; i++) {
    const node = tree[i];
    if (node.children) {
      if (node.children.some(item => item.key === key)) {
        parentKey = node.key;
      } else if (getPar(key, node.children)) {
        parentKey = getPar(key, node.children);
      }
    }
  }
  return parentKey;
  }  
  
    
    
    const onSearch = value => {
   
      console.log(value)
      genrFilterList(treeData)
      

          const  expandedKeys= dataList.map((e) => {
            if (e.title.indexOf(value) > -1) {
            return getPar(e.key,treeData)
            
            }
        
        })
      
      setData({
        expandedKeys,
        autoExpandParent:true
      })
    };
  
  const  onExpand = expandedKeys => {
    setData({
      expandedKeys,
      autoExpandParent: false,
    });
  };
    
  
 
    
  
  console.log(data.expandedKeys)
    return (
        <div
>
        <div    className="searchBox">
            <Search placeholder="请输入关键字搜索"
                onSearch={onSearch} style={{ width: '85%', padding: '20px' }} />
            
            <Tooltip placement="bottom" title={  data.tootip}>
            <div
                className="searchButon"
                    data-tooltip={data.tootip}
                    onClick={handleSetClick}
            >
                <img src={data.setkey?opendor:hidden} alt="" />
               
                </div>
            </Tooltip>
            </div>   
            <div>
                {!data.setkey&&
                    <Tree
                    rootClassName="trueclassName"
                    showLine={true}
              expandedKeys={data.expandedKeys}
            autoExpandParent={data.autoExpandParent}
            onExpand={ onExpand}
                    onSelect={onSelect}
                    treeData={treeData}
                    height={ 900}
      />
                }
            
            </div>            

     
</div>
)

}
export default DictionAries