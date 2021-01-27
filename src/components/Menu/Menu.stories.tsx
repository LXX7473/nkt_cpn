
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
//引入组件，以及组件的接口
import Menu ,{MenuProps}from './Menu';
import MenuItem,{MeunItemProps} from './MenuItem'
export default {
//Example是顶级菜单
//Button是一级菜单
  title: 'XComponents/XMenu',
//引入的写好的组件
  component: Menu,
  
} as Meta;

//返回组件选项对象的公共方法

const Template:Story<MenuProps>=(args) =>(<Menu {...args} >
    <MenuItem index='0'>111</MenuItem>
    <MenuItem index='1'>222</MenuItem>
    <MenuItem index='2'>333</MenuItem>
</Menu>); 

export const XMenu = Template.bind({});

//这里传入props，storybook会将其传入Template方法
XMenu.args = {
  defaultIndex:'1'
};





