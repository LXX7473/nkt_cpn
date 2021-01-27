/*
 * @Author: lx 
 * @Date: 2021-01-21 20:08:02
 * @LastEditTime: 2021-01-26 14:06:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /nkt/src/components/Upload/index.tsx
 */
import React,{ChangeEvent, FC,useRef} from 'react';
import Button from '../Button'
import axios from 'axios'

interface UploadProps{
    action:string;
    onSuccess?:(data?:any,file?:File)=>void;
    onFail?:(err:any,file:File)=>void,
    onProgress?:(percent:number,file:File)=>void
    beforeUpload?:()=>boolean|Promise<File>
}


const Upload:FC<UploadProps>=({
    action,
    onSuccess,
    onFail,
    onProgress
})=>{

let inputRef=useRef<HTMLInputElement>(null)

const handleClick=()=>{
    if(inputRef.current){
        inputRef.current.click()
    }
}
const handleInputUpload=(e:ChangeEvent<HTMLInputElement>)=>{
    
    let files=e.target.files;
    if(!files)return;
    uploadFile(files);
    if(inputRef.current){
        inputRef.current.value=''
    }
}

const uploadFile=(files:FileList)=>{
    let fileList=[...files]
    fileList.forEach(file=>{
        const formData=new FormData();
        formData.append(file.name,file)
        axios.post(action,formData,{
            headers:{
                'Content-Type':'multipart/form-data'
            },
            onUploadProgress:(e)=>{
                let percent =Math.round((e.loaded/e.total)*100)||0;

                if(percent<100){
                    if(onProgress){
                        onProgress(percent,file)
                    }
                }
            },
        }).then(res=>{
            if(onSuccess){
                onSuccess(res.data,file)
            }
        }).catch(err=>{
            if(onFail){
                onFail(err,file)

            }
        })
    })
}
    return (
        <div>
            <h1>进行文件上传</h1>
            <Button btnType='primary' onClick={handleClick}>上传文件</Button>
            <input type='file' style={{display:'none'}} ref={inputRef} onChange={handleInputUpload}/>
        </div>
    )
}

export default Upload