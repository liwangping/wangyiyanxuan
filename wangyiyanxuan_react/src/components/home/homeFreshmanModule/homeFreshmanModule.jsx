import React, { Component } from 'react';
import './homeFreshmanModule.css'

class HomeFreshmanModule extends Component {
    state = {  }
    render() { 
        return ( 
            <>
             {/* 新人专享礼展示栏 */}
             <div className="freshmanModule index-floor">
             <div className="Module_header">
                 <span className="txt">新人专享礼</span>
             </div>
             <div className="content">
                 <a href="" className="left">
                     <div className="name">新人专享红包</div>
                     <div className="imgWrap">
                         <div className="m-lazyload">
                             <img src="http://yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt=""/>
                             <div className="animate"></div>
                         </div>
                     </div>
                 </a>
                 <a href="" className="right">
                     <div className="module1">
                            <a className="activityItem">
                                <div className="picWrap">
                                    <img src="http://yanxuan.nosdn.127.net/768355bca1c186c0c25de88bd1272d8c.png?imageView&thumbnail=200x200&quality=75" alt=""/>
                                </div>
                                <div className="discount">
                                    <div className="nowprice">￥35</div>
                                    <div className="oldprice">￥45</div>
                                </div>                              
                            </a>
                            <div className="cnt">
                                    <div className="title">福利社</div>
                                    <div className="subTitle">今日特价</div>
                            </div> 
                     </div>
                     <div className="module2">
                            <a className="activityItem">
                                <div className="picWrap">
                                    <img src="http://yanxuan.nosdn.127.net/8cab8087306ee26d8ef22cf91e8ebaf9.png?imageView&thumbnail=200x200&quality=75" alt=""/>
                                </div>
                                <div className="discount">
                                    <div className="nowprice">￥1</div>
                                    <div className="oldprice">￥16</div>
                                </div>                              
                            </a>
                            <div className="cnt">
                                    <div className="title">新人拼团</div>
                                    <div className="tag">一元起包邮</div>
                            </div>
                     </div>
                 </a>
             </div>
         </div>
         <div className="kingKong-pagination"></div> 
            </>
         );
    }
}
 
export default HomeFreshmanModule;