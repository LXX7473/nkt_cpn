import React ,{createContext,useState}from 'react';
import classNames from 'classnames'
type MenuMode = 'horizontal' | 'vertical'
type onSelectProps=(value:string)=>void;
export interface MenuProps{
    /**基础样式 */
    mode:MenuMode;
    /**样式类名 */
    className?:string;
    /**默认选中项 */
    defaultIndex?:string;
    /**组件style */
    style?:React.CSSProperties;
    /** onSelect回调*/
    onSelect?:onSelectProps
    /** 默认展开的子列表*/
    defaultOpenSubMenus?: string[];
}
interface contextProps{
    index?:string;
    onSelect?:onSelectProps
}
export const MenuContext=createContext<contextProps>({index:"0"})
const Menu:React.FC<MenuProps>=(props)=>{
let {className,defaultOpenSubMenus,onSelect,style,children,mode,defaultIndex}=props;
const [activeIndex,setActiveIndex]=useState(defaultIndex);

const classes = classNames('viking-menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical',
  })

const handleClick=(index:string)=>{
    setActiveIndex(index);
    if(onSelect){
        onSelect(index)
    }
}
  const passContext={
      index:activeIndex||'0',
      onSelect:handleClick

  }
return (
    <ul style={style} className={classes} >
        <MenuContext.Provider value={passContext}>
        {children}
        </MenuContext.Provider>
    </ul>
)
}
Menu.defaultProps = {
    defaultIndex: '0',
    mode: 'horizontal',
    defaultOpenSubMenus: [],
  }
export default Menu