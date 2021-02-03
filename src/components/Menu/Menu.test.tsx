import React from 'react';
import { render, fireEvent, RenderResult, cleanup } from '@testing-library/react'
import Menu, { MenuProps } from './Menu';

import MenuItem from './MenuItem';

const defaultMenuProps: MenuProps = {
    defaultIndex: '0',
    onSelect: jest.fn(),
    className: 'test-menu'
}

const testVerProps: MenuProps = {
    defaultIndex: '0',
    mode: 'vertical',
}


let renderMenu = (props: MenuProps) => {
    return (
        <Menu {...props}>
            <MenuItem >frist</MenuItem>
            <MenuItem disabled >second</MenuItem>
            <MenuItem >thrid</MenuItem>
        </Menu>
    )
}
let wrapper: RenderResult, activeItem: HTMLElement, disabledItem: HTMLElement, thridItem: HTMLElement, menuElement: HTMLElement;
describe('test menu component', () => {
    beforeEach(() => {
        wrapper = render(renderMenu(defaultMenuProps));
        activeItem = wrapper.getByText('frist');
        menuElement = wrapper.getByTestId('test-menu');
        disabledItem = wrapper.getByText('second');
        thridItem = wrapper.getByText('thrid')

    })
    it('test Menu & MenuItem', () => {
        expect(activeItem).toBeInTheDocument();
        expect(menuElement).toHaveClass('viking-menu')
        expect(activeItem).toHaveClass('is-active menu-item');
        expect(disabledItem).toHaveClass('is-disabled menu-item')
    })
    it('click item shoucld change activeand call th right callbnack', () => {
        expect(thridItem).toBeInTheDocument();
        fireEvent.click(thridItem);
        expect(thridItem).toHaveClass('is-active');
        expect(activeItem).not.toHaveClass('is-active');
        fireEvent.click(disabledItem);
        expect(disabledItem).not.toHaveClass('is-active')
    })
    it('test vertical menuItem', () => {
        cleanup()
        wrapper = render(renderMenu(testVerProps));
        let verticalMenu = wrapper.getByTestId('test-menu');

        expect(verticalMenu).toHaveClass('menu-vertical')
    })

})