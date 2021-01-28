import React, { useContext, useState } from 'react';
import { MenuContext } from './Menu'
import { MeunItemProps } from './MenuItem'
import classNames from 'classnames'
interface SubMenuProps {
    index?: string;
    className?: string;
    title?: string;

}

const SubMenu: React.FC<SubMenuProps> = (props) => {
    let { index, children, className, title } = props;
    let context = useContext(MenuContext)
    const openedSubMenus = context.defaultOpenSubMenus as Array<string>
    const isOpend = (index && context.mode === 'vertical') ? openedSubMenus.includes(index) : false
    const [menuOpen, setOpen] = useState(isOpend)
    const classes = classNames('menu-item submenu-item', className, {
        'is-active': context.index === index,
        'is-opened': menuOpen,
        'is-vertical': context.mode === 'vertical'
    })
    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault()
        setOpen(!menuOpen)
    }
    let timer: any
    const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
        clearTimeout(timer)
        e.preventDefault()
        timer = setTimeout(() => {
            setOpen(toggle)
        }, 300)
    }
    const clickEvents = context.mode === 'vertical' ? {
        onClick: handleClick
    } : {}
    const hoverEvents = context.mode !== 'vertical' ? {
        onMouseEnter: (e: React.MouseEvent) => { handleMouse(e, true) },
        onMouseLeave: (e: React.MouseEvent) => { handleMouse(e, false) }
    } : {}


    const renderChildren = () => {
        const subMenuClasses = classNames('viking-submenu', {
            'menu-opened': menuOpen
        })
        return <ul className={subMenuClasses}>
            {
                React.Children.map(children, (child, i) => {
                    let childElement = child as React.FunctionComponentElement<MeunItemProps>
                    if (childElement.type.displayName === 'MenuItem') {
                        return React.cloneElement(childElement, {
                            index: `${index}-${i}`
                        })
                    } else {
                        console.warn('subMenu have acomponent which is not a menuItem')
                    }
                })
            }
        </ul>


    }
    return (
        <li key={index} className={classes} {...hoverEvents}>
            <div className="submenu-title" {...clickEvents}>
                {title}

            </div>
            {renderChildren()}
        </li>
    )
}


export default SubMenu