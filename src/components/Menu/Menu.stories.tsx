
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import {
    // Title,
    // Subtitle,
    // Description,
    // Primary,
    ArgsTable,
    Stories,
    PRIMARY_STORY,
} from '@storybook/addon-docs/blocks'
//引入组件，以及组件的接口
import Menu, { MenuProps } from './Menu';
import MenuItem from './MenuItem'
import SubMenu from './SubMenu'
export default {
    //Example是顶级菜单
    //Button是一级菜单
    title: 'XComponents/XMenu',
    //引入的写好的组件
    component: Menu,
    subcomponents: { SubMenu, MenuItem },
    parameters: {
        docs: {
            page: () => (
                <>
                    {/* <Title /> */}
                    {/* <Subtitle /> */}
                    {/* <Description /> */}
                    {/* <Primary /> */}
                    <Stories includePrimary={true} title='' />
                    <ArgsTable story={PRIMARY_STORY} />

                </>
            ),
            // source: {
            //     type: 'code'
            // }
        },
    }
} as Meta;

//返回组件选项对象的公共方法

const Template: Story<MenuProps> = (args) => (<Menu {...args} >
    <MenuItem >tab1</MenuItem>
    <MenuItem >tab2</MenuItem>
    <MenuItem >tab3</MenuItem>
</Menu>);
export const XMenu = Template.bind({});
XMenu.storyName = '默认菜单栏'
// //这里传入props，storybook会将其传入Template方法
XMenu.args = {
    defaultIndex: '0'
};


const Template1: Story<MenuProps> = (args) => (<Menu {...args} >

    <MenuItem >Tab1</MenuItem>
    <SubMenu title='Tab2'>
        <MenuItem >subTab1</MenuItem>
        <MenuItem >subTab2</MenuItem>
    </SubMenu>

    <MenuItem >Tab4</MenuItem>
</Menu>);

export const XMenu1 = Template1.bind({});
XMenu1.storyName = '展开菜单栏'
XMenu1.args = {
    defaultIndex: '1',
    defaultOpenSubMenus: []
}


