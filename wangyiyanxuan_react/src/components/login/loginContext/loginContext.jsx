import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink, Redirect, } from "react-router-dom";

import './loginContext.css'
class LoginContext extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: '',
            password: ''
        };

        this.handleCount = this.handleCount.bind(this);
        this.handlePassWord = this.handlePassWord.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
      handleCount(event) {
          console.log("222222222")
        this.setState({count: event.target.value});
      }
      handlePassWord(event) {
        this.setState({password: event.target.value});
      }
    
      handleSubmit(event) {
        console.log("111111111111")
        alert('提交的名字: ' + this.state.count);
        this.props.history.push('/home')
        // event.preventDefault();
        
    }

    render() { 
        return ( 
            <>
                <div className="loginContext">
                    <div className="context_Header">
                        <div className="img"></div>
                    </div>  
                    <form className="loginFrom" onSubmit={this.handleSubmit}>
                        <div className="loginCount">
                            <label>
                                <input type="text"
                                    placeholder="账号"
                                    className="loginInputCount"
                                value={this.state.count} onChange = {this.handleCount}/>
                            </label>
                        </div>
                        <div className="line"></div>
                        <div className="">
                            <label>
                                <input type = "password"
                                    placeholder="密码"
                                    className="loginInputCount"
                                 value={this.state.password} onChange={this.handlePassWord}/>
                            </label>
                        </div>
                        <div className="line"></div>
                            <input type="submit" className="LoginSumbit" value="登录" />
                    </form>
                </div>
            </> 
         );
    }
}
 
export default LoginContext;