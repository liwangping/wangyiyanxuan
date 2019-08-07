import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, NavLink, Redirect, } from "react-router-dom";
import './tabBar.css'
class TabBar extends Component {
    state = {  }
    render() { 
        return ( 
        <>
            <div className="tabBar-wrap">
                    <nav className="app-nav__tab">
                        <NavLink className="item" to ="/home">
                            <i name="tabBar-index" className="u-icon icon-tabBar-index"></i>
                            <span className = "text">首页</span>
                        </NavLink>             
                        <NavLink className="item" to ="/sort">
                            <i name="tabBar-sort" className="u-icon icon-tabBar-sort"></i>
                            <span className = "text">分类</span>
                        </NavLink>                            
                        <NavLink className="item" to ="/shopping">
                            <i name="tabBar-shopping" className="u-icon icon-tabBar-shopping"></i>
                            <span className = "text">购物车</span>
                        </NavLink>               
                        <NavLink className="item" to ="/mine">
                            <i name="tabBar-mine" className="u-icon icon-tabBar-mine"></i>
                            <span className = "text">个人</span>
                        </NavLink>              
                    </nav>
                </div>
        </> );
    }
}
 
export default TabBar;