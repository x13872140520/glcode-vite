/*
 * @Author: your name
 * @Date: 2022-05-10 08:46:25
 * @LastEditTime: 2022-05-10 09:48:56
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /gajumakr/glcode-vite/src/utils/static.js
 */


export class Func {


    static EventLooper = (newArray) => {
        // 按照数组的顺序来执行
        const promisesChange = (cb, delay) => {

            return new Promise((resolve, reject) => {

                setTimeout(() => {
                    cb()
                    resolve()
                }, delay)


            })
        }
        //函数执行
        Array.isArray(newArray) && newArray.reduce(async function (acc, cur, index) {
            return acc.then(() => {

                return new Promise(async (resolve, reject) => {

                    await promisesChange(cur.fn, cur.timer)
                    resolve()
                })

            })


        }, Promise.resolve())


    }




}