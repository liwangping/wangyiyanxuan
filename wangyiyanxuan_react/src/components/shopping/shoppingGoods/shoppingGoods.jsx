import React, { Component } from 'react';
import './shoppingGoods.css'
class shoppingGoods extends Component {
    state = {  }
    render() { 
        return ( 
            <>
                    <div className="shopping-goods">
                        <ul className="goods-list">
                            <li className="goods">
                                <div className="goodsDetali">
                                    <div className="left-Button">
                                        <div className="chooseButton"></div>
                                    </div>
                                    <div className="middle">          
                                        <img src="http://yanxuan.nosdn.127.net/95ba5fff6761b7a754ed68fdec153620.png?imageView&thumbnail=160x0&quality=75" alt=""/>           
                                    </div>
                                    <div className="right">
                                        <div className="title">3色可选远红外线近0辐射负离子电吹风</div>
                                        <div className="desc">
                                            <div className="left">
                                                <div className="Sort">
                                                    <span className="desc">朱砂红</span>
                                                    <i className="icon"></i>                                  
                                                </div>
                                                <div className="Price">
                                                    <div className="nowPrice">￥189</div>
                                                    <div className="oldPrice">￥199</div>
                                                </div>
                                            </div>
                                            <div className="addAndDecrease">
                                                <div className="less"></div>
                                                <div className="textWrap">
                                                    <input type="tel" className="tel" value="1"/>
                                                </div>
                                                <div className="more"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                </div>
            </>
         );
    }
}
 
export default shoppingGoods;