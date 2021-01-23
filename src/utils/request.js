/*
 * @Author: your name
 * @Date: 2021-01-22 13:41:18
 * @LastEditTime: 2021-01-22 13:51:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /nkt/src/utils/request.js
 */

 import axios from 'axios';


// 发起请求
 export const uploadAction=(url,data,onSuccess,onFail)=>{
    axios.post(url,data,{
        headers:{
            'Content-Type':'multipart/form-data'
        },
        onUploadProgress:(e)=>{
            console.log('进度----',e.loaded)
        },
    }).then(res=>{
        console.log('成功啦',res)
        onSuccess(res.data)
    }).catch(err=>{
        onFail(err)
    })
 }
 
