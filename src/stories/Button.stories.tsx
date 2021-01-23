/*
 * @Author: your name
 * @Date: 2021-01-23 11:40:04
 * @LastEditTime: 2021-01-23 21:51:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /nkt/src/stories/Button.stories.tsx
 */
import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Button, { ButtonProps } from '../components/Button';
export default {
  title: 'Example/Button',
  component: Button,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
  // decorators:[((Story)=><div> <Story></Story></div>)]
  parameters: {
    
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} >按钮</Button>;

export const XButton = Template.bind({});
XButton.args = {
  btnType:'primary',
  size:'lg',
};






