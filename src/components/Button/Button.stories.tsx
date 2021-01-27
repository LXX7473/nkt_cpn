
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
//引入组件，以及组件的接口
import Button, { ButtonProps } from './index';
export default {
//Example是顶级菜单
//Button是一级菜单
  title: 'XComponents/Button',
//引入的写好的组件
  component: Button,
  parameters:{
   
  }
} as Meta;

//返回组件选项对象的公共方法
const Template: Story<ButtonProps> = (args) => <Button {...args} >按钮</Button>;
// 导出一个展示组件内容的二级菜单,变量名就是菜单名

export const XButton = Template.bind({});

//这里传入props，storybook会将其传入Template方法
XButton.args = {
  btnType:'primary',
  size:'lg',
};






