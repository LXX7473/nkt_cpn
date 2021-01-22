/*
 * @Author: lx 
 * @Date: 2021-01-21 20:08:02
 * @LastEditTime: 2021-01-22 13:06:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /nkt/src/components/Upload/index.tsx
 */
import React,{FC,useRef} from 'react';
import Button from '../Button'
import axios from 'axios'

interface UploadProps{
    action:string;

}


const Upload:FC<UploadProps>=()=>{

let inputRef=useRef<HTMLInputElement>(null)

const handleClick=()=>{
    if(inputRef.current){
        inputRef.current.click()
    }
}
const uploadFile=(e:)=>{

}

    return (
        <div>
            <h1>进行文件上传</h1>
            <Button btnType='primary' onClick={handleClick}>上传文件</Button>
            <input type='file' style={{display:'none'}} ref={inputRef} onChange={}/>
        </div>
    )
}

export default Upload