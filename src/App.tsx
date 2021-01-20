/*
 * @Author: your name
 * @Date: 2021-01-20 16:13:13
 * @LastEditTime: 2021-01-20 19:22:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /nkt/src/App.tsx
 */
import React from 'react';
import Button from './components/Button'

function App() {
  function say(){
    console.log('哈哈哈')
  }
  return (
    <div className="App">
      <Button size='lg' btnType='danger' onClick={()=>say()}>呵呵</Button>
      <Button btnType='link' href={'http://www.baidu.com'} > 百度一下~你就知道</Button>
      <Button size='sm' btnType='primary'>默认按钮</Button>
      <Button >默认按钮</Button>
      <Button disabled>被禁用</Button>
    </div>
  );
}

export default App;
