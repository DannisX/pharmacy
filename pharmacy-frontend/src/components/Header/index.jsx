import React from 'react'
// import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {Menu} from 'antd'
import header from './index.module.css'
// 路由配置
import { routes } from '../../router'
const {SubMenu} = Menu;
const Header = ()=>{
    return (
        <Menu mode="horizontal" className={header.indent}>
            {
                routes.map(item=>{
                    if(item.children){
                        return (<SubMenu key={item.component} title={item.title}>
                            {
                                item.children.map(menuitem=>{
                                    return(
                                        <Menu.Item key={menuitem.component}>
                                            <Link to={menuitem.to}>{menuitem.title}</Link>
                                        </Menu.Item>
                                    )
                                })
                            }
                        </SubMenu>)
                    }else if(item.component ==='Login' || item.component === 'Register'){
                            return( <Menu.Item key={item.component} className='fr'>
                                <Link to={item.to}>{item.title}</Link>
                            </Menu.Item>)   
                    }else{
                        return( <Menu.Item key={item.component}>
                            <Link to={item.to}>{item.title}</Link>
                        </Menu.Item>)
                    }
                })
            }

            {/* <Menu.Item key='Home'>
                <Link to='/'>首页</Link>
            </Menu.Item>
            <SubMenu key='Medicine' title="药品管理">
                <Menu.Item key="medicineInput">
                    <Link to='/medicine/input'>药品录入</Link>
                </Menu.Item >
                <Menu.Item key='medicineQuery'>
                    <Link to='/medicine/query'>药品查找</Link>
                </Menu.Item>
                <Menu.Item key="medicineUnexpected">
                    <Link to='/medicine/unexpected'>库存异动</Link>
                </Menu.Item>
            </SubMenu> */}
        </Menu>
    )
}

export default Header;