import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink, Redirect, } from "react-router-dom";
import Home from './home/home';
import Mine from './mine/mine';
import Shopping from './shopping/shopping';
import Sort from './sort/sort';
import Login from './login/login';
import './App.css'

function App(){ 
    return (
        <Router>
            <div className="app">
                <div className="shopping_view">
                    <Switch>
                        <Route path="/login" component = {Login}></Route>
                        <Route path="/home" component = {Home}></Route>
                        <Route path="/mine" component = {Mine} />
                        <Route path="/shopping" component = {Shopping} />
                        <Route path="/sort" component = {Sort} />
                        <Route path="/" component = {Home} />
                        {/* <Redirect from="/*" to="/" /> */}
                    </Switch>
                </div>
                {/* 底部导航栏 */} 
            </div>
        </Router>
        
    )
}

export default App;
