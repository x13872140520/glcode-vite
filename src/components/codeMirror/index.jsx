/*
 * @Author: your name
 * @Date: 2022-05-06 10:12:26
 * @LastEditTime: 2022-08-17 09:43:22
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /gajumakr/glcode-vite/src/components/codeMirror/index.js
 */
import React, {
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
  useState,
} from "react";
import produce from "immer";
import ReactDOM from "react-dom";
import CodeMirror from "codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/javascript/javascript.js"; // 代码高亮必须引入
import "codemirror/mode/python/python.js";
import "codemirror/addon/lint/lint.css";
import "codemirror/addon/lint/lint";
import "codemirror/addon/lint/json-lint";
// 主题样式（我直接用了纯白色的，看着比较舒服）
import "codemirror/theme/rubyblue.css";
// 括号显示匹配
import "codemirror/addon/edit/matchbrackets";
import "codemirror/addon/selection/active-line";
// 括号、引号编辑和删除时成对出现
import "codemirror/addon/edit/closebrackets";
// 折叠代码要用到一些玩意
import "codemirror/addon/fold/foldgutter.css";
import "codemirror/addon/fold/foldgutter";
import "codemirror/addon/fold/xml-fold";
import "codemirror/addon/fold/foldcode";
import "codemirror/addon/fold/brace-fold";
import "codemirror/addon/fold/indent-fold.js";
import "codemirror/addon/fold/markdown-fold.js";
import "codemirror/addon/fold/comment-fold.js";
import "./index.scss";
import { useSetState } from "ahooks";
import { changePythonResult } from "../../redux-toolkit/counterSlice";
import { useSelector, useDispatch } from "react-redux";
import { Tabs } from "antd";
const { TabPane } = Tabs;

const NewCodeMirror = (props, ref) => {
  console.log("NewCodeMirror");
  let codeMirror = useRef(null);
  const [codes, setCodes] = useState(
    "import turtle\n" + "turtle.color('red')\n" + "turtle.forward(75)"
  );

  const [pysc, setScript] = useState([
    { title: "pythonscript1", content: "", key: "1", closable: false },
  ]);
  const [obj, setobj] = useSetState({
    activeKey: "1",
    nameKey: "1",
  });
  const dispatch = useDispatch();
  //父组件调用子组件的事件
  const runIt = () => {
    console.log("ssssssssss", Sk);
    Sk.configure({
      output: (text) => {
        console.log("getresult", text);
        dispatch(changePythonResult(text));
      },
      read: (x) => {
        if (
          Sk.builtinFiles === undefined ||
          Sk.builtinFiles["files"][x] === undefined
        ) {
          throw new Error("File not found: '" + x + "'");
        }
        return Sk.builtinFiles["files"][x];
      },
      python3: true,
    });

    if (!Sk.TurtleGraphics) {
      Sk.TurtleGraphics = {};
    }

    Sk.TurtleGraphics.height = 600;
    Sk.TurtleGraphics.width = 600;
    //Sk.TurtleGraphics.animate = this.animate;
    Sk.canvas = "myCanvas";
    Sk.TurtleGraphics.target = document.getElementById("myCanvas");

    setTimeout(() => {
      //   console.log("SKmisceval", Sk.misceval);
      Sk.misceval
        .asyncToPromise(() => {
          console.log(" this.codes", codes);
          return Sk.importMainWithBody("<stdin>", false, codes, true);
        })
        .then(
          () => {
            console.log("first");
          },
          () => {
            console.log("second");
          }
        );
    }, 100);
  };
  const handleotn = () => {
    console.log(2);
    runIt();
  };
  useImperativeHandle(ref, () => ({
    handlenew: () => {
      handleotn();
    },
  }));

  useEffect(() => {
    initNewCodeMirror();
    return () => {};
  }, [obj.activeKey]);

  // 实列化

  const initNewCodeMirror = () => {
    console.log("CodeMirror", CodeMirror);

    let NewCodeMirror = CodeMirror.fromTextArea(codeMirror.current, {
      mode: "python",
      theme: "material", // 主题样式
      firstLineNumber: 1, //行号是几开始
      firstLine: 2,
      scrollbarStyle: null, //滚动条
      tabSize: 2, //tab缩紧
      smartIndent: true, // 是否智能缩进
      styleActiveLine: true, // 当前行高亮
      lineNumbers: true, // 显示行号
      gutters: [
        "CodeMirror-linenumbers",
        "CodeMirror-foldgutter",
        "CodeMirror-lint-markers",
      ],
      lineWrapping: true, // 自动换行
      matchBrackets: true, // 括号匹配显示
      autofocus: true, //获取焦点
      autoCloseBrackets: true, // 输入和退格时成对
      foldGutter: true,
      pasteLinesPerSelection: true,
      autocorrect: true,
      viewportMargin: 2,
    });
    NewCodeMirror.setOption("value", "# version: Python3");
    NewCodeMirror.setOption("value", codes);
    NewCodeMirror.on("change", (e) => {
      console.log("changechange", NewCodeMirror.getValue());
      setCodes(NewCodeMirror.getValue());
    });
    NewCodeMirror.setSize("100vw", "800px");
  };
  const handleChange = () => {
    console.log("handleChange");
  };
  const tabHandle = (e) => {
    setobj({
      activeKey: e,
    });
  };

  const onEdit = (targetKey, action) => {
    if (action === "add") {
      add();
    } else {
      remove(targetKey);
    }
  };

  const add = () => {
    console.log(obj.activeKey, obj.nameKey);

    let numberkey = Number(obj.activeKey);
    let nuMameKey = Number(obj.nameKey);

    // 新增的idkey
    const activeKey = `${(numberkey += 1)}`;
    // 新增的name
    const activeName = `pythonscript${(nuMameKey += 1)}`;
    const activeContent = "";

    let newpysc = [...pysc];

    newpysc.push({
      title: activeName,
      content: activeContent,
      key: activeKey,
    });
    setScript(newpysc);
    setobj({
      activeKey: activeKey,
      nameKey: activeKey,
    });
  };
  const remove = (targetKey) => {
    let oldpysc = pysc.filter((e) => e.key !== targetKey);
    const targetIndex = pysc.findIndex((pane) => pane.key === targetKey);
    if (oldpysc.length && targetKey === obj.activeKey) {
      const { key } =
        oldpysc[targetIndex === oldpysc.length ? targetIndex - 1 : targetIndex];

      setobj({
        activeKey: key,
      });
    }

    setScript(oldpysc);

    //   setScript(
    //   oldpysc
    //   )

    // let oldacr = `${obj.activeKey - 1}`
    //     let oldnameKey =`${obj.nameKey-1}`
    // console.log(oldacr,oldnameKey)

    //   setobj({
    //       activeKey: oldacr,
    //       nameKey:oldnameKey,
    //           })
  };

  return (
    <div className="newCodeMi">
      <Tabs
        type="editable-card"
        activeKey={obj.activeKey}
        onEdit={onEdit}
        onTabClick={tabHandle}
      >
        {pysc.map((pane) => (
          <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
            <textarea id="newCode" ref={codeMirror}></textarea>
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
};
export default forwardRef(NewCodeMirror);
