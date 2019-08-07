import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink, Redirect, } from "react-router-dom";

import './loginHeader.css'

class LoginHeader extends Component {
    state = {  }
    render() { 
        return ( 
        <>  
            <div className="LoginHeader">
                <NavLink to="/home">
                    <div className="L-home"></div>
                </NavLink>
                <NavLink to="/home"> 
                    <div className="L-yangyiyanxuanlogo"></div>
                </NavLink>
                
                <div className="L-right">
                    <NavLink to="/search">
                        <i className="L-search_icon"></i>
                    </NavLink>
                    <NavLink to="/shopping">
                        <i className="L-cate_icon"></i>
                    </NavLink>
                </div>
            </div>    
        </>
         );
    }
}
 
export default LoginHeader;