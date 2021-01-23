/*
 * @Author: your name
 * @Date: 2021-01-20 16:13:13
 * @LastEditTime: 2021-01-22 14:21:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /nkt/src/App.tsx
 */
import { Console } from 'console';
import React from 'react';
import Upload from './components/Upload'
function App() {
 
  return (
    <div className="App">
     <Upload
     action='http://jsonplaceholder.typicode.com/posts'
     onSuccess={(data)=>{console.log('成功了',data)}}
     onFail={(err)=>{console.log('e',err)}}
     onProgress={(percent)=>{console.log(`进度是${percent}%`)}}
     />
    </div>
  );
}

export default App;
