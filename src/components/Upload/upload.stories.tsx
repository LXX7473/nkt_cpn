
import { action } from '@storybook/addon-actions'
import { Upload } from './upload'
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

//引入组件，以及组件的接口
import Input, { InputProps } from '../Input/index';

export default {
    //Example是顶级菜单
    //Button是一级菜单
    title: 'XComponents/Upload',
    //引入的写好的组件
    component: Upload,

} as Meta;

let defaultInputProps: InputProps = {
    size: 'lg',

}
let disableProps: InputProps = {
    disabled: true
}
//返回组件选项对象的公共方法
const Template = () => {
    return <div><Input {...defaultInputProps} /> <Input {...disableProps} /></div>
}

export const Input1 = Template.bind({});












