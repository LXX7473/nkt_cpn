/*
 * @Author: your name
 * @Date: 2021-01-20 16:41:15
 * @LastEditTime: 2021-01-21 19:00:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /nkt/src/components/Button/index.tsx
 */

import React from 'react';
import classNames from 'classnames'


type BtnType="primary"|"default"|"danger"|'link';

type Size='lg'|'sm';

interface BaseButtonProps{
    size?:Size;
    btnType?:BtnType;
    className?:string;
    disabled?:boolean;
    href?:string;
    children?:React.ReactNode
} 

type BtnProps=BaseButtonProps&React.ButtonHTMLAttributes<HTMLElement>

type LinkProps=BaseButtonProps&React.AnchorHTMLAttributes<HTMLElement>

export type ButtonProps=Partial<BtnProps&LinkProps>


const Button:React.FC<ButtonProps>=({
    children,
    disabled,
    className,
    btnType,
    size,
    href,
    ...otherProps
})=>{

    const classes=classNames('btn',className,{
        [`btn-${btnType}`]:btnType,
        [`btn-${size}`]:size,
        'disabled':(btnType==='link')&&disabled
    })

    if(btnType==='link'&&href){
    return <a href={href} className={classes} {...otherProps}>{children}</a>
    }else{
        return(
            <button className={classes} disabled={disabled} {...otherProps}>
                {children}
            </button>
        )
    }
   

}
Button.defaultProps={
    disabled:false,
    btnType:'default'

}
export default Button