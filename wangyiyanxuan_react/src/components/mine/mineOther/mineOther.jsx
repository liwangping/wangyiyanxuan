import React, { Component } from 'react';
import './mineOther.css'

class MineOther extends Component {
    state = {  }
    render() { 
        return ( 
        <>
            <div className="myOther">
                            <div className="container">
                                <ul className="lists">
                                    <li className="item">
                                        <a className="container" href="">
                                            <div className="desc">
                                                <i className="img ulist"></i>
                                                <span className="name">我的订单</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="item">
                                        <a className="container" href="">
                                            <div className="desc">
                                                <i className="img uping"></i>
                                                <span className="name">周六一起拼</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="item">
                                        <a className="container" href="">
                                            <div className="desc">
                                                <i className="img uafterSale"></i>
                                                <span className="name">售后服务</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="item">
                                        <a className="container" href="">
                                            <div className="desc">
                                                <i className="img ubackmoney"></i>
                                                <span className="name">邀请返利</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="item">
                                        <a className="container" href="">
                                            <div className="desc">
                                                <i className="img ufristBuy"></i>
                                                <span className="name">优先购</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="item">
                                        <a className="container" href="">
                                            <div className="desc">
                                                <i className="img uintegral"></i>
                                                <span className="name">积分中心</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="item">
                                        <a className="container" href="">
                                            <div className="desc">
                                                <i className="img umemberClub"></i>
                                                <span className="name">会员俱乐部</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="item">
                                        <a className="container" href="">
                                            <div className="desc">
                                                <i className="img uaddress"></i>
                                                <span className="name">地址管理</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="item">
                                        <a className="container" href="">
                                            <div className="desc">
                                                <i className="img uacount"></i>
                                                <span className="name">账号安全</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="item">
                                        <a className="container" href="">
                                            <div className="desc">
                                                <i className="img uhelp"></i>
                                                <span className="name">帮助与客服</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="item">
                                        <a className="container" href="">
                                            <div className="desc">
                                                <i className="img uidea"></i>
                                                <span className="name">意见反馈</span>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
        </>
         );
    }
}
 
export default MineOther;