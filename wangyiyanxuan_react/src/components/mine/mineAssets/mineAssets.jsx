import React, { Component } from 'react';
import  './mineAssets.css'
class MineAssets extends Component {
    state = {  }
    render() { 
        return ( 
            <>
                <div className="myAssets">
                    <div className="title">我的资产</div>
                    <div className="myAssetsSort">
                        <div className="item backMoney">
                            <div className="money">￥0</div>
                            <div className="name">回馈金</div>
                        </div>
                        <div className="item RedPocket">
                             <div className="money">0</div>
                             <div className="name">红包</div>
                        </div>
                        <div className="item Preferrntial">
                            <div className="money">0</div>
                            <div className="name">优惠券</div>
                        </div>
                        <div className="item subsidy">
                            <div className="money">￥0</div>
                            <div className="name">津贴</div>
                        </div>
                        <div className="item giftCard">
                            <div className="money">0</div>
                            <div className="name">礼品卡</div>
                        </div> 
                    </div>
                </div>   
            </> 
        );
    }
}
 
export default MineAssets;