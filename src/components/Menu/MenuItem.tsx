import React, { useContext } from 'react';
import { MenuContext } from './Menu'
import classNames from 'classnames'
export interface MeunItemProps {
    index?: string;
    className?: string;
    disabled?: boolean;
    style?: React.CSSProperties

}

const MenuItem: React.FC<MeunItemProps> = (props) => {
    let context = useContext(MenuContext)
    let { children, style, className, disabled, index } = props;
    const classes = classNames('menu-item', className, {
        'is-disabled': disabled,
        'is-active': context.index === index
    })
    const handleClick = () => {
        if (context.onSelect && index && !disabled) {
            context.onSelect(index)
        }
    }
    return (
        <li style={style} className={classes} onClick={handleClick}>{children}</li>
    )
}

MenuItem.displayName = 'MenuItem'
export default MenuItem