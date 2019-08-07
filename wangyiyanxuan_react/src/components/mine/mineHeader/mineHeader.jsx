import React, { Component } from 'react';
import './mineHeader.css'

class mineHeader extends Component {
    state = {  }
    render() { 
        return ( 
            <>
                <div className="header">
                            <div className="bg">
                                <div className="container">
                                    <div className="left">
                                        <div className="headerImage">
                                            <img src="https://yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png" alt=""/>
                                        </div>
                                        <div className="desc">
                                            <div className="Acount">
                                                <p className="Name"> 18270961332</p>
                                            </div>
                                            <div className="Type">
                                                <span className="userType">普通用户</span> 
                                            </div>
                                        </div>                    
                                    </div>
                                    <div className="right">
                                        <div className="superman">
                                            <i className="icon-superman"></i>
                                            <div className="desc">
                                                <div className="title">超级用户</div>
                                                <div className="tryUse">立即试用</div>
                                            </div>    
                                        </div>
                                    </div> 
                                </div>
                            </div>                      
                        </div>
            </>
         );
    }
}
 
export default mineHeader;