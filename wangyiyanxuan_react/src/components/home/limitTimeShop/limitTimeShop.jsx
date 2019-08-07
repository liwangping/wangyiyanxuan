import React, { Component } from 'react';
import './limitTimeShop.css'
class LimitTimeShop extends Component {
    state = {  }
    render() { 
        return ( 
        <>
        <div className="limitTimeShop index-floor">         
             <div className="moduleTitle">
                 <div className="left">
                     <span>限时购</span>
                     <div className="countdown">
                         <span className="hours">09</span>
                         <span className="colon">:</span>
                         <span className="mins">19</span>
                         <span className="colon">:</span>
                         <span className="secs">01</span>
                     </div>
                 </div>
                 <a className="right">
                     <span>更多</span>
                     <i className="iconTitleArrow"></i>
                 </a>
             </div>
             <div className="cnt">
                 <div className="FlashSaleWrap">
                    <a className="flashSaleItem">
                        <div className="imgWrap">
                            <img src="http://yanxuan.nosdn.127.net/cbd137c383bef53a3f39ba7558ef872b.png?imageView&thumbnail=216x216&quality=75" alt=""/>
                        </div>
                        <div className="price">
                            <span className="nowprice">￥1799</span>
                            <span className="oldprice">￥2299</span>
                        </div> 
                    </a>
                    <a className="flashSaleItem">
                        <div className="imgWrap">
                            <img src="https://yanxuan.nosdn.127.net/227848eddc10ee787cbccb6f315fb963.png?imageView&thumbnail=216x216&quality=75" alt=""/>
                        </div>
                        <div className="price">
                            <span className="nowprice">￥1399</span>
                            <span className="oldprice">￥1599</span>
                        </div> 
                    </a>
                    <a className="flashSaleItem">
                        <div className="imgWrap">
                            <img src="http://yanxuan.nosdn.127.net/9aa07a291c8e2c6f97e2f9d0ce2ba7c5.png?imageView&thumbnail=216x216&quality=75" alt=""/>
                        </div>
                        <div className="price">
                            <span className="nowprice">￥149</span>
                            <span className="oldprice">￥189</span>
                        </div> 
                    </a>
                    <a className="flashSaleItem">
                        <div className="imgWrap">
                            <img src="http://yanxuan.nosdn.127.net/2181df75cc63d89f8ab098faed332641.png?imageView&thumbnail=216x216&quality=75" alt=""/>
                        </div>
                        <div className="price">
                            <span className="nowprice">￥129</span>
                            <span className="oldprice">￥158</span>
                        </div> 
                    </a>
                    <a className="flashSaleItem">
                        <div className="imgWrap">
                            <img src="http://yanxuan.nosdn.127.net/6cdb3da46a4b95b36dea89d6d47d3bd9.png?imageView&thumbnail=216x216&quality=75" alt=""/>
                        </div>
                        <div className="price">
                            <span className="nowprice">￥549</span>
                            <span className="oldprice">￥699</span>
                        </div> 
                    </a>
                    <a className="flashSaleItem">
                        <div className="imgWrap">
                            <img src="http://yanxuan.nosdn.127.net/609452a430143ec9e691abddb067ec67.png?imageView&thumbnail=216x216&quality=75" alt=""/>
                        </div>
                        <div className="price">
                            <span className="nowprice">￥88</span>
                            <span className="oldprice">￥99</span>
                        </div> 
                    </a>
                </div>
             </div>
         </div>
        
        </>
         );
    }
}
 
export default LimitTimeShop;