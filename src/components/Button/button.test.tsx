/*
 * @Author: lx
 * @Date: 2021-01-21 17:57:30
 * @LastEditTime: 2021-01-21 20:05:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /nkt/src/components/Button/button.test.js
 */
import React from 'react';
import Button,{ButtonProps} from './index';
import {render,fireEvent}from '@testing-library/react'
const defaultProps={
    onClick:jest.fn()
}

const dangerProps:ButtonProps={
    size:'lg',
    btnType:'danger',
}

const linkProps:ButtonProps={
    size:'sm',
    btnType:'link',
    href:'http://www.baidu.com'
}

const disabledProps:ButtonProps={
    size:'lg',
    btnType:'default',
    disabled:true,
    onClick:jest.fn()
}

test('a test demo',()=>{
    expect(2+2).toBe(4)
})

describe('test button component',()=>{
    it('test default Button',()=>{
        const wraper=render(<Button {...defaultProps}>btn</Button>);
        const element=wraper.getByText('btn');
        expect(element).toBeInTheDocument();
        expect(element.tagName).toBe('BUTTON');
        fireEvent.click(element);
        expect(defaultProps.onClick).toHaveBeenCalled()
    })
    it('to check dangerprops',()=>{
        const wraper=render(<Button {...dangerProps}>primaryBtn</Button>)
        const element=wraper.getByText('primaryBtn');
        expect(element).toBeInTheDocument();
        expect(element).toHaveClass('btn btn-danger')

    })
    it('to check a link',()=>{
        const wrapper=render(<Button {...linkProps}>link</Button>);
        const element=wrapper.getByText('link') as HTMLButtonElement ;
        expect(element.tagName).toBe('A');
        expect(element).toHaveClass('btn btn-link');
        expect(element.disabled).toBeFalsy()
    })
    it ('to check disabled button',()=>{
        const wrapper=render(<Button {...disabledProps}>disabledBtn</Button>)
        const element=wrapper.getByText('disabledBtn');
        fireEvent.click(element)
        expect(defaultProps.onClick).not.toHaveBeenCalled()
    })
})
