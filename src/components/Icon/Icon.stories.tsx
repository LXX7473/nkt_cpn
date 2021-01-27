
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { faHome } from "@fortawesome/free-solid-svg-icons";
//引入组件，以及组件的接口
import Icon ,{IconProps}from './index';
export default {
//Example是顶级菜单
//Button是一级菜单
  title: 'XComponents/XICon',
//引入的写好的组件
  component: Icon,
  argTypes:{
    color:{control:'color'},
  }
} as Meta;

//返回组件选项对象的公共方法
const Template:Story<IconProps>= (args) => <Icon {...args} icon={faHome}/>;
// 导出一个展示组件内容的二级菜单,变量名就是菜单名

export const XIcon = Template.bind({});

//这里传入props，storybook会将其传入Template方法
XIcon.args = {
  theme:'primary'
};






