import React, { Component } from 'react'
import LoginHeader from '../../components/login/loginHeader/loginHeader';
import LoginContext from '../../components/login/loginContext/loginContext';
import TabBar from '../../components/common/tabBar/tabBar';
import {apiAddress } from '../../api/api'


import './login.css'

class Login extends Component {
    state = {  }
    render() { 
        return (   
            <>  
                {/* 顶部 */} 
                <div className="Login_index">
                    <div className="Login">
                        <LoginHeader />
                    </div>
                    <div className="LoginContext">
                        <LoginContext />   
                    </div>
                </div>
                <TabBar />
            </>
         );
    }
    componentDidMount(){   
        apiAddress({
        }).then(res => {
            console.log(res)
            console.log("+++++++++++++")    
        })
    }
}
 
export default Login;