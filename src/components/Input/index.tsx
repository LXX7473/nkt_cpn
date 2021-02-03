import React, { ReactElement, InputHTMLAttributes } from 'react';
import classNames from 'classnames'
import Icon from '../Icon/index';
import { IconProp } from '@fortawesome/fontawesome-svg-core'

type sizeMap = 'lg' | 'sm';
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
    disabled?: boolean;
    className?: string;
    size?: sizeMap;
    icon?: IconProp;
    prepend?: string | ReactElement;
    append?: string | ReactElement;


}


const Input: React.FC<InputProps> = (props) => {
    const { disabled, className, size, icon, prepend, append, style, ...restProps } = props;
    const classes = classNames('viking-input-wrapper', {
        [`input-size-${size}`]: size,
        'is-disabled': disabled,
        'input-group': prepend || append,
        'input-group-append': !!append,
        'input-group-prepend': !!prepend
    })

    return (
        <div className={classes} style={style}>
            {prepend && <div className="viking-input-group-prepend">{prepend}</div>}
            {icon && <div className="icon-wrapper"><Icon icon={icon} title={`title-${icon}`} /></div>}
            <input
                className="viking-input-inner"
                disabled={disabled}
                {...restProps}
            />
            {append && <div className="viking-input-group-append">{append}</div>}
        </div>
    )
}

export default Input